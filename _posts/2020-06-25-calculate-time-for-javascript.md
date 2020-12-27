---
title: How To Calculate Time For Javascript Functions
layout: post
description: Working with dates and time in javascript has some abstract concepts.  You must create a date object first and then use methods that will let you retrieve the time and date that it represents.
excerpt: In order to work with dates in javascript, you have to first create a new instance of the date object.  Then you can specify the time and date you want it to represent.
author: andrew
tags: ["javascript", "web development"]
---

<img data-src="/assets/images/posts/clock.jpg" alt="a clock being held in the air" title="clock" class="img-responsive">

As I've been learning more javascript I found dates and time to be a bit confusing. I will try and break down some of the parts to make it easier for someone else to learn as well.

<h2>The Date Object</h2>
Let us say you wanted to work with the date  January 1st, 2021.  In javascript we could write something like this:
<pre>let newYear = newDate(2021, 00, 01)</pre>

that would return:

<pre>Date Fri Jan 01 2021 00:00:00 GMT-0500 (Eastern Standard Time)</pre>

So the use case that I needed was pretty simple but hard for me to figure out at first so I want to go over it for future reference.

We all build a new year countdown clock at some point when learning dates and times. The one I ended up referencing was <a class="visible inline-link" href="https://traversymedia.com/" rel="noreferrer nofollow" alt="traversymedia">Brad Traversy's</a> which you can find <a class="visible inline-link" rel="noreferrer nofollow" href="https://vanillawebprojects.com/projects/new-year-countdown/" title="Brad Traversy's New Year Clock"> here</a>.

To make a countdown timer you only need the current time and the date you want to count down to. to achieve this I did this:

<h2>Javascript Time Code Snippets</h2>

<pre>
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`); //  this allows it to update every year
const currentTime = new Date();
const diff = newYear - currentTime;
</pre>

This is pretty much the set up in the function.

diff returns a value like:

<pre>
newYear - new Date()
16361376895
</pre>

Javascript likes to work in milliseconds so I need to convert those values.

to do that here are the following javascript time forumulas I used:

<pre>
let d = Math.round(diff / 1000 / 60 / 60 / 24);
  let h = Math.round((diff / 1000 / 60 / 60) % 24);
  let m = Math.round((diff / 1000 / 60) % 60);
  let s = Math.round((diff / 1000) % 60);
</pre>

These are just simple math formulas that you can find anywhere on the internet. basically you just need to update your dom elements if you are creating a counter.

now if you want to have it update every second you just need to add the following line of code:

<pre>
setInterval(updateTime, 1000);
</pre>

This will start executing updateTime function every 1000 ms.

I hope this helps someone when they go to work with converting days, minutes, hours, etc. If you have any questions or want to see some code feel free to reach out to me <a class="visible inline-link" href="/contact.html">here</a>!
