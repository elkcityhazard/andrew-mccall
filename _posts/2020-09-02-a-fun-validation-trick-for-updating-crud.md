---
title: Give Back Useful Information For CRUD PATCH Updates
layout: post
description: A simple way to give feedback on findByIDandUpdate commands using nodejs, express, mongodb, and mongoose
excerpt:  A user somehow defines an object property that does not exist in your database.
author: andrew
tags: ["javascript", "web development", "learn to code"]
---

## Return useful information to your users regarding crud operations

<pre>exports.updateSingleTask = async (req, res, next) => {
const updates = Object.keys(req.body);
const allowedUpdates = ['description', 'completed'];
const isValidOperation = updates.every((update) => {
return allowedUpdates.includes(update);
})

    if (!isValidOperation) {
        return res.status(400).send({error: "The property you tried to update does not exist"})
    }
    try {

const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
new: true,
runValidators: true
})
if (!task) {
return res.status(404).send();
}
res.send(task)
} catch(err) {
res.status(400).send(err);
}
}</pre>

### How User Feedback Works

The problem: A user somehow defines an object property that does not exist in your database.

For example, lets say you have a task to update. There might be a description and also a completed attribute. Lets say the user wants to use a PATCH request to update that bad boy but for whatever reason they end sending something like this:

`{ "date" : "mm:dd:yyyy" }`

Of course, mongoose would just accept this as a valid operation but nothing useful would return to the user that they made a mistake.

The answer: create a check for allowed updates and only continue the operation if it returns true.

<pre>exports.updateSingleTask = async (req, res, next) => {
const updates = Object.keys(req.body);
const allowedUpdates = ['description', 'completed'];
const isValidOperation = updates.every((update) => {
return allowedUpdates.includes(update);
})

    if (!isValidOperation) {
        return res.status(400).send({error: "The property you tried to update does not exist"})
    }</pre>

1. parse the req.body object into an array
2. create an allowedUpdates variable to establish which propertiecan be updated
3. check to see if the data sent to the server is a valid operation.using the every method check to see if each value in the updatevariable is in the allowedUpdates list. If all of them are indeeincluded then isValidation will return true and the operation wilcontinue as normal. If isValidOperator returns false then return 400 error with some useful information for the user.

This is a fun little example to help provide more useful feedback the user.
