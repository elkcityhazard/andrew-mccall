---
title: Console.Log A Chessboard
layout: post
description: A basic example of how to use nested for loops to output a text chessboard to the console.  A great introduction to nested for loops in javascript.
excerpt: A brief example of nested loops to make a text based chessboard.
author: andrew
tags: ["for loop", "web development", "javascript", "learn to code"]
---

<img data-src="/assets/images/posts/chessboard.jpg" alt="Chessboard" title="how to make a text-based chessboard" class="img-responsive">

<pre>
        Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
</pre>

<p>Things To Learn Here</p>

<ul>
<li>Variables</li>
<li>For Loop</li>
<li>% Modulus (division remainder)</li>
</ul>

The first thing we want to do is define a couple of variables:

<pre>
let size = 8;
let board = ' ';
</pre>

This defines the height and the width that the board will be. we set board to an empty string to act as the first space of the board.

To accomplish this we need to go ahead and use a nested for loop.

<pre>
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if((i+j) % 2 === 0 ) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    board += '\n';
}
</pre>

basically we are checking each space with its corresponding space to see if it is even or odd. If it is even we are outputting a blank space. If it is odd we are outputting an octothorpe. We use the modulus operator to determine this.

<code>board += '\n';</code> tells us to make a line break at the end of the line.

The basics of a for loop are setting a starting index, which is usually 0, setting a limit which is usually a number or array length, and then incrementing the loop index until all indexes have been exhausted.

for example:

<pre>
let list = new Array(1,2,3,4,5);

for (let i = 0; i < list.length; i++) {
    console.log(i);
}
</pre>

This will output the following to the console:

<pre>
0 
1 
2 
3 
4
</pre>

I think that pretty much wraps up my loose understanding of nested lists.

If you have any questions or find any errors feel free to reach out to me <a href="/contact" title="contact me" aria-label="navigation">here.</a>
