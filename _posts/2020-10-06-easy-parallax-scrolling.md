---
title: Simple Parallax Scrolling
layout: post
description: There is almost no use case for a parallax scrolling javascript framework on your site.  This is something that can be acheived with very few lines of vanilla javascript.
excerpt: Parallax scrolling is ubiquitous in today's web design approaches.  There are, however, those who dissent.  Some assert that it is a poor approach that actually distracts the user.
author: andrew
tags: ["parallax scrolling", "web development", "javascript", "learn to code"]
---

# Simple Parallax Scrolling With Javascipt

Parallax scrolling is ubiquitous in today's web design approaches. There are, however, those who dissent. It has a simple, pre-attentive trait that aims to capture attention quickly but often misses its purported mark. Human's have learned to quickly filter out "banner noise" and only recognize information that is relevant to their query.

## Javscript Parallax Scrolling

<pre>
const parallax = (id, rate) => {
let el = document.querySelector(id);
const sp = () => {
let x = el.getBoundingClientRect().top / rate;
let y = Math.round(x \* 100) / 100;
el.style.backgroundPosition = 'center ' + y + 'px';
}
sp();
window.addEventListener('scroll', function(e) { sp(); });
}

parallax('.one', 10);
parallax('.two', 5);
</pre>

1.  We are going to start out by defining a function that takes two parameters. The first will be the id which is simply either the class or id of the element you want to add the parallax effect to.
2.  The second parameter it takes in is the modifier. This is simply an integer value used to alter the scroll speed to give the desired effect.
3.  Within the function we are going to create another function which handles the calculation for the background position. There are two formulas you need to know here:
    let x = paraId.getBoundingClientRect().top / modifier; let y = Math.round(x \* 100) / 100;
4.  After we calculate the x and y variables we are going to update the backgroundPosition such that el.style.backgroundPosition = 'center' + y + px;
5.  Then, inside the parallax function we simply want to call that function to get the values: sp();
6.  finally while still in the function we want to call the event listener on the scroll: window.addEventListener('scroll', function(e) { sp(); });
7.  Finally, call the function with the desired parameters to get things working.

parallax('.cont', 6)

## The State Of Parallax Scrolling

I really do not recommend doing this. It hurts your performance and never achieves the desired user experience that you would hope for. Nevertheless, this is a good tool to have for those few use cases that it might benefit from.
