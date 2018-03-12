---
layout: post
title: An Error Has Occurred
description: a virtual reality art installation
img: /img/2.jpg
---

An Error has occured is a single player virtual reality art installation reflecting on Anne Friedberg's 2006 book "The Virtual Window". The experience takes place inside a virtual space resembling the classroom that it was played in. Every 15 seconds, the player hears the Windows 95 Error noise and watches as an image of their current viewport spawns in front of them.

<div class="img_row">
	<img class="col one" src="/img/AnErrorHasOccured3.png" alt="" title="Screenshot 2"/>
	<img class="col two" src="/img/AnErrorHasOccured4.png" alt="" title="Screenshot 3"/>
</div>
<div class="col three caption">
	The game lets the player wander around the classroom and spawns a "window" object of their current viewport at each time interval. 
</div>
<div class="img_row">
	<img class="col three" src="/img/AnErrorHasOccured1.png"/>
</div>

There is also a chance upon each spawning of the window that the player enters a new spatial reality, randomized out of three available in the game. One of them has wireframe shaders turned on, while the other has Unity's default "error" shader on, as seen in the pictures below.

<div class="col three caption">
Players have a chance to "enter" this reality upon the spawning of a new window object. 
</div>

For this project, I sought to recreate my classroom in Maya as well as learn to use different textures and shaders. All of the models in the game are original and the player functions with the Steam VR plugin available for Unity. The Code allowing the game to take a screenshot of the current viewport can be found at the following link: 


<div class="img_row">
	  <img class="col two" src="/img/AnErrorHasOccured2.png"/>
	  <img class="col one" src="/img/AnErrorHasOccured5.png"/>
	</div>
<div class="col three caption">
	The "normal" reality, left, and the "error" reality, right.
</div>


<br/><br/><br/>


The code is simple. Just add a col class to your image, and another class specifying the width: one, two, or three columns wide. Here's the code for the last row of images above: 

	<div class="img_row">
	  <img class="col two" src="/img/6.jpg"/>
	  <img class="col one" src="/img/11.jpg"/>
	</div>
