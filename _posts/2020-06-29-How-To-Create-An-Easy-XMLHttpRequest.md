---
title: How To Initialize A Javascript XMLHttpRequest
layout: post
description: XMLHttpRequest is the gateway to being able to do powerful stuff on your website.  It is one of the quickest ways to add dynamic content to your site.
excerpt: One of the first things to learn when learning asynchronous javascript is how to make an XMLHttpRequest.  In this short article I am going to show how to achieve this so you can add some very powerful and dynamic features to your website.  Perhaps you want to make a NASA image slideshow?  A popular Chuck Norris Joke Generator?  All of these things can be achieved using XHR to call an API and retrieve information.
author: andrew
tags: ["javascript", "web development", "learn to code"]
---

<img data-src="/assets/images/posts/xmlhttprequest.jpg" alt="a human making an xmlhttprequest" title="neon switchboard" class="img-responsive">

One of the first things to learn when learning asynchronous javascript is how to make an XMLHttpRequest. In this short article I am going to show you briefly how to achieve this so you can add some very powerful and dynamic features to your website. Perhaps you want to make a NASA image slideshow? A popular Chuck Norris Joke Generator? All of these things can be achieved using XHR to call an API and retrieve information.

<h2>What is an XMLHttpRequest</h2>
An XMLHttpRequest is an API which is an object and its job is to transfer data between the web browser and web server.  The object is initialized by the browser and the idea behind it is to solve one problem: to be able to continuously update a loaded web page. One thing to note is that the Fetch Alternative has replaced the XMLHttpRequest but I think it is a good idea to know this way as it is good practice and helps to understand some higher order javascript concepts.

<h2>Format XMLHttpRequest</h2>

In your file named something like app.js you will have something that looks like this:

<pre>
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //  CREATE NEW XMLHttpRequest

    const xhr = new XMLHttpRequest():

    //  OPEN Request
    xhr.open('GET', '{api url}', true);

    xhr.onprogress = function() {
        // do something while loading for example:
        console.log('READYSTATE', this.readyState);
    }

    xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        //  Do Something like add data to the DOM
        document.getElementById('targetDOMElement').innerHTML = `
        <li>${response.responseText}</li>
        `;
    }

    xhr.send();
}
</pre>

<h2>Explaining An XMLHttpRequest</h2>

In part one of loadData you are initializing a new asychronous XMLHttpRequest. The second part gets three parameters: whether it is a GET or POST request, the api url, and whether or not it is an asynchronous request or not.

onprogress will do something while the xhr request is communicating with the api. Since we do not know how long the server will be communicating with the page, we can load a loading icon there to indicate that the api is still communicating with the page.

xhr.onload is essentially the bread and butter of the asynchronous request. It says to the browser, "grab this information and do this with it." For example, in the footer of this website the request calls the openweather api and returns the local weather and outputs it to the footer of the page.

The final part of the equation is the send method. This is what sends the necessary information to the server to be processed.

<h3>Conclusion</h3>

Again, these are just simple notes to help you get up and running with the most basic XMLHttpRequest. This is not meant to be exhaustive source but just informational. It helps me to see things broke down to the most basic form possible and then built up from there. I hope this can help someone who is learning XMLHttpRequests like I am!

Please <a class="visible inline-link" href="/contact" title="contact me">contact me</a> if you have any questions or comments and I'll be more than happy to get back to you!
