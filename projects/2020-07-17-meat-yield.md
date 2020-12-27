---
title: Javascript Meat Yield Calculator
layout: default
description: A simple calculator to help with food and meat costing written with vanilla javascript.
excerpt:
author: andrew
permalink: projects/meat-yield.html
---

## Meat Costing Calculator Project

The purpose of the meat costing calculator is to assist with pricing in a retail meat setting.  This is the first version which uses vanilla Javascript, CSS, and HTML.  There is no persistent storage currently in this iteration.  As time permits, I plan to connect to a database and I will update the project.

### Planning The Meat Yield Calculator
The basis of the project is to make my life easier at my day job.  We are in need of reassessing meat costs and setting prices.  Since the interface is rather simple I started the project by simply listing all the formulas I needed to figure out various pieces of information.  I decided to use skeleton css as the CSS framework to make my life a little easier and focus on the Javascript logic.  Ultimately, I ended writing a lot of custom css to make it work a little nicer.  

Initially I used all regular functions to calculate the data.  This worked but it was not a good solution.  Instead, I decided to make a meat Object which worked out a lot better.  I feel like it might have contributed to a greater length of code (it might just be me) but I feel that it is easier to understand than using all functions.  


### Implementing The Cut Test Calculator
I worked through the initial phase of the project in a linear fashion.

1. Wrote initial html and defined the input and outputs as needed
2. CSS - added as much of the CSS I could upfront.  I had to come back later when I added in the logic because I didn't quite hit the mark at first.
3.  Initial Javascript logic.  I defined as many variables as I could and structured the event listeners and functions as well.
4. Wrote the initial logic and checked for functionality.
5.  Went back and started to add error handling to make it more functional overall.


### Conclusion
The finished project can be viewed at <a class="visible inline-link" href="https://www.meatyieldtest.xyz" alt="meatyieldtest">here</a>.  I will continue to update this page as I add more features to the program!
