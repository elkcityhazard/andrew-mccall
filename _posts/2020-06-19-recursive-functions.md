---
title: Recursive Functions
layout: post
description: Recursive functions call itself to return a result.  As long as they do not overflow the call stack, they can produce some interesting results.  There is, however, one draw back to recurive functions.
excerpt: It is acceptable for a function to call itself as long as it does not over flow the call stack.  A function that calls itself is called a recursive function.
author: andrew
tags: ["javascript", "web development"]
---

Recursive functions are at first difficult to wrap your head around. Essentially, a recursive function is one that calls itself as part of the function. For a recursive function to not overload the call stack there needs to be a condition set to cause the function to stop calling on itself.

For Example in javascript:

<pre>
function recursion(x) {
if (x == 0) {
return x;
}
console.log(x)
return recursion(x-1);
}

console.log(recursion(20));
</pre>

In this example, we set the condition to stop calling itself if x is equal to zero. Until that happens, x will incrementally subtract 1 from itself until the condition is met and log the result to the console. In this example, we are starting at 20 and subtracting 1 each time until we get to zero.

See how the function calls itself in the second part of the conditional statement. Essentially, the function is saying, "hey we have not yet met the desired condition yet so we better subtract another one." So the function calls itself again but this time it subtracts 1 from x. So if we started with x == 20 we now have x = 19 and the function runs again if the condition is not met all the way until it counts down to zero.

To my understanding recursion can result in poor time efficiencies. In some languages it can result in the allocation of a new stack frame and require the implementation of multiple threads of execution. Also, in some environments it is simply preferred to implement a higher order function such as "map", "filter", and "reduce". It is sometimes the case that these higher order functions can receive a boost from parallelization.

Ultimately, recursion usually takes up greater resource allocation to complete and iteration (looping) usually takes up less. Ultimately, I prefer to use iteration when processing simple sequential data structures and anywhere a simple loop will do the trick. If I need to process a recursive data structure, however, I will use recursion - especially if the result is cleaner and simple for the next person to read.

These are just simple notes as I learn about javascript. If you have any questions, want a better explanation, or just want to chat code on your coding feel free to reach out to me<a href="/contact.html" class="visible inline-link" title="contact me">here</a>
