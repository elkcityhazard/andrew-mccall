---
title: "Time To Shine - CSS Hover Shine Effect"
subtitle: "Add CTA button in HTML with attention-grabbing shine effect"
layout: post
author: andrew
tags: ['html', 'css', 'call to action']
---
## Time To Shine: Or CSS Hover Shine Effect

<img data-src="/assets/images/posts/cta.jpg" alt="Call To Action In HTML" title="CTA" class="img-responsive">

We usually only have a few short seconds to grab our users attention.  Most of the time, they will leave without any further action and increase your bounce rate along with it.  This is problematic because we want our web guests to find some intrinsic value to our site and use our product.  

## Call To Action

All successful landing pages will have some type of call to action. Remember, we want to use a call to action whenever we want our users to do anything.  For example, if we want our users to join us or if we want our users to try us for free.   There are many different components to a successful, high-converting call to action.  A good call to action can land a conversion while a poor one can cause a bounce. 

## CTA Button In HTML

Call to actions are always a button.  Do not use a small hyperlink.  Do not use your favorite meme.  Do not use pictures of cats.  Use a button.  scores of research in regards to the importance of this.  The moment your user lands on a call to action button in HTML it is the essential moment for your page.  

## What should a call to action button have:

- a defined border
- stand out from other elements on the page
- include text within the button

We use these familiar styles because as humans we crave the familiar.  Ourminds already know what a call to action button is going to look like in theHTML document.


## Adding CSS Shine Effect TO CTA Button In HTML

How do our potential customers know they have hit the CTA button?  If the call to action has good copy then they will know they have arrived.  We can help out the marketing team with some visual queues, too.


<script async src="//jsfiddle.net/elkcityhazard/hua7w51s/118/embed/"></script>

## How CSS Shine Effect works

I have provided the fiddle for my button above.  If you want to, you can simply adapt my code to your site.  I will still explain how it works.

This CSS trick relies on a few different things to make it happen.  The button must have `overflow:hidden`, `position:relative` and I am using `transition: all 250ms ease-in-out` to gracefully transition the button on hover. 

The "shine" effect is done using the css psuedo-elements `.button::before` & `.button::after` and applying `transform:translateX()` to them.  Also, we use the `filter: blur();` to soften the edges of the shine shapes to simulate light reflecting off of the button. 

The css might look a little something like this:

    &::before {
      background: rgba(255,255,255,1.0);
      content: '';
      display: block;
      filter: blur(20px);
      height: 50px;
      opacity: 0;
      position: absolute;
      top: 0;
      transform: translateX(-300px) skew(-15deg);
      transition: transform 250ms ease-in-out;
      -webkit-transition: transform 250ms ease-in-out;
      width: 100px;
    }

Again you can refer to the fiddle to see what is going on under the hood.  The basics of it are 3 components.  You want to create two seperate elements that you can hide outside of the button.  I used `::before` and `::after` because I wanted to create two slightly different shapes to give added depth to the shine.  I gave them different widths and heights so they would not overlap each other when they are transitioning.  

I hide the shine elements outside of the button by setting them with a default `transform: translateX(-300%);`  This way they are not overlapping.  I also gave them an `opacity:0;` to make sure we were not going to be seeing them too early.

## Trigger CSS Shine Button effect

Triggering the animation is easy enough.  We already have it tucked away off to the left hand side of the button. To trigger the transition we create the following css rule:

    .button:hover::before,
    .button:hover::after {
      transform: translateX(300%), skew(15%);
      opacity: 1;
      transition: all 250ms ease-in-out;
    }

Now when you hover over the button you will see a beautiful shine effect which will really help draw attention to the fact that the button has been pressed!


## Final Thoughts On CSS Button Shine Effect

There you have it.  Now you know a new way to help draw attention to your call to action.  If you have any questions feel free to contact me on the site or on social media and I will help you the best I can!  Send me your improvements to your code so I can see how you're doing it better than I can!

    With Love, 
    Andrew