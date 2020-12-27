---
title: Quickly Connect To MongoDB In NodeJS
layout: post
description: Mongodb is a powerful database application and NodeJs has no problem connecting to it quickly.
excerpt: Use mongodb to set up your first database.  This is a quick and easy way to get mongodb set up with nodejs.
author: andrew
tags: ["javascript", "web development"]
---

<p>I will get quickly to the point.</p>

<pre>
const express = require("express");
const app = express();
const mongodb = require("mongodb");
const router = require("./router");
let db;

connectionString =
  "your mongo connection string here"

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); //  boilerplate to initialize req.body.input-name
app.use(express.json());
app.use("/", router);
app.use("/thanks", router);

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db();
    app.listen(port number);
  }
);
</pre>

<ol>
  <li>make sure node.js is installed on your system.</li>
  <li>start a new project.</li>
  <li>using terminal, cd into project directory.</li>
  <li>npm init -y
create app.js</li>
  <li>You need to know your mongodb database name and collection</li>
  <li>npm install mongodb</li>
  <li>in app.js require and initialize express.</li>
  <li>require mongodb and initialize routes if available</li>
  <li>initialize db variable.</li>
  <li>to get form data you need to use the express.urlencoded feature to get req.body.input-name</li>
  <li>monbodb.connect takes 3 arguments
connectionstring (from mongodb), an object, and then a function</li>
  <li>make sure to establish database connection before listening on the port</li>
</ol>

<p>These are quick and dirty notes for communicating with the database server.</p>
