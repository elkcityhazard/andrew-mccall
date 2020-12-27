---
title: Javascript Background Changer
layout: default
description: Click the button, change the background color. Generates random hex value and passes it to API to get color name.
excerpt:
author: andrew
permalink: projects/background-changer.html
---

## Javascript Background Changer
I saw a similar project that was more basic.  It was using an array to store a set of hex values and then looping through them to generate the color.  I expanded the project by generating a random hex value and then calling an api to retrieve information about the hex value.

## Javascript Background Changer Setup

The project uses loop, random number generation, XHR, and DOM manipulation to achieve the results. To help mask the loading I originally had a loading spinner which executed onprogress of the api call but decided to remove it and replace it with an animation fade in since the max call time was usually less than 150ms.

### Final Thoughts
To further the project, I might add functionality to cycle through previous colors.  The project can be viewed at <a class="visible inline-link" href="https://elkcityhazard.github.io/background-changer/" title="background changer">Background Changer</a>.  
