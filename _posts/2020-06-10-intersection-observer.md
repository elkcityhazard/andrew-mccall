---
title: Intersection Observer API
layout: post
description: Intersection Observer API allows us to asynchronously watch a DOM element and make changes to it base on its intersection with the viewport.
excerpt: Use intersection observer to asynchronously observe a DOM element and trigger events based on if it is within the viewport.
author: andrew
tags: ["javascript", "web development"]
---

<img data-src="/assets/images/posts/intersection-observer.jpg" alt="Intersection Being Observed" title="Intersection Being Observed" class="img-responsive">

I wanted to be able to easily load an animation if an element came into view. Intersection observer seems to be the quickest way for me. If you want to use this for lazy loading you can give your images a data-src property instead of src then assign the data-src to the src when the element comes into view.

My basic template is:

<pre>
let images = document.querySelectorAll('.image-class');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      let attr = image.target.getAttribute('data-src');
      image.target.src = attr;
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__fadeIn");
      observer.unobserve(entry.target);
    } else {
      //entry.target.classList.remove('animate__animated animate__bounce');
      return;
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});
</pre>

This is the basic set up. If you have an image that you want to lazy load you can do something like this:

<code>
&lt;img data-src="url" alt="image alt" class="image-class"&gt;
</code>
and in the javascript you can add:

<pre>
let attr = image.target.getAttribute('data-src');
      image.target.src = attr;
</pre>

to the function body.

Intersection observer takes two arguments: the element to be observed and the options.

<pre>
let options = {
  root: null
  rootMargin: "0px",
  threshold: 1.0,
};
let observer = new intersectionObserver((images, options) => {
    //Do something with images
});
</pre>

root: defines what the viewport area is. If null it will default to the viewport. But you can also use document.getELementById to pick a intersection cross section.

rootMargin: is similar to margin in that it adds margin to your intersection observer entry so that it will trigger with margin added to it.

threshold: is how much should be in the observation area before the request triggers. For example 1.0 means the entire element needs to be in the viewport. This can also be an array so that the callback runs every time visibility passes a threshhold. For example:

<pre>[0, 0.25, 0.5, 0.75, 1.0]</pre>
