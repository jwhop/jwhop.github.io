---
title: "Textris"
date: 2020-02-24
draft: false
description: "a description"
tags: ["Social Media Bot", "Tetris", "Collab", "Game", "Favorite", "Portfolio"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">Textris</div>
     <div class="title-bar-controls">
       <!-- <button aria-label="Minimize"></button>
       <button aria-label="Maximize"></button>
       <button aria-label="Close"></button> -->
     </div>
   </div>
   <div class="window-body">
     <menu role="tablist">
       <button aria-selected="true" aria-controls="Video">Video</button>
       <button aria-selected="false" aria-controls="Summary">Summary</button>
       <button aria-selected="false" aria-controls="Details">Details</button>
       <button aria-selected="false" aria-controls="Awards">Awards</button>
       <button aria-selected="false" aria-controls="DevLog">DevLog</button>
     </menu>
     <article role="tabpanel" id="Video">
     {{< youtubeLite id="l2dEbWkT0_s" label="Textris Documentation" >}}
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>TEXTRIS is the ultimate long distance, collaborative version of the popular arcade game. Play in a discord server with players around the world, working together to make sure the pieces never reach the top of the board. The game was initially created for an “asynchronous” game assignment. With a game always on, but very slow, players would have to check back on the game at their own convenience throughout the day. Since the game is collaborative, dozens of players tended to participate per server, even if they just liked moving the pieces back and forth.</p>
    <p>The initial assignment, to take an existing game and make it asynchronous, came with some fun challenges. Technically, we had to figure out what medium and platform to have the game on such that we could all access it. Then, it was a matter of how the players would interact with it. We decided on a command-based discord bot. After deciding to iterate on the project, some other questions popped up: how often should the bot 'redraw' the board? We ended up developing a solution where the bot requires its own channel with only the board. Any time players want to interact with it, they would type in a command on that channel. The bot reads their command then deletes it, then performs the corresponding action. I also really enjoyed the 'hold' mechanic. Traditionally, tetris games allow players to hold a piece for later. With such a powerful action being available to anyone, we implemented a version of the mechanic that required multiple distinct users requesting the piece to be held, adding some interesting democracy tactics.</p>
     <p>At its peak, the Textris bot belonged to over 200 discord servers. In checking the database on occasion, there always were dozens of games being played, most lasting several days and many lasting weeks or months. Due to a discord API update in 2022 Textris is no longer publicly available.</p>
     <p>Textris was a project that got me used to DevOps, hosting bots, and databases. I learned how best to store data so that when the bot had to restart (once per day on the free Heroku plan) the game's state would not be interrupted.</p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2020
 
 ### Development Time
 part-time, ~3 months
 
 ### Medium
 Node.js discord bot, MongoDB database, Heroku hosting

 ### Responsibilities
 programming, dev ops
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 
     <li> 2020, Online. <a target="_blank" href="https://nordicgame.com/">Nordic Game Conference</a> Featured work</li>

 </ul>
     </article>
     <article role="tabpanel" hidden id="DevLog"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Development Log
 <a target="_blank" href="https://drive.google.com/drive/folders/1dT2Lx3qaH6Y8LNbypsF2SCJsWUSLaeTr?usp=sharing">Playtest Screenshots, Assignment Reflection</a>  
     </article>
   </div>
 </div>
 
 <script>
 
 const tabs = document.querySelectorAll("menu[role=tablist]");
 
 for (let i = 0; i < tabs.length; i++) {
   const tab = tabs[i];
 
   const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");
 
   tabButtons.forEach((btn) =>
     btn.addEventListener("click", (e) => {
       e.preventDefault();
 
       tabButtons.forEach((button) => {
         if (
           button.getAttribute("aria-controls") ===
           e.target.getAttribute("aria-controls")
         ) {
           button.setAttribute("aria-selected", true);
           openTab(e, tab);
         } else {
           button.setAttribute("aria-selected", false);
         }
       });
     })
   );
 }
 
 function openTab(event, tab) {
   const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
   articles.forEach((p) => {
     p.setAttribute("hidden", true);
   });
   const article = tab.parentNode.querySelector(
     `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
   );
   article.removeAttribute("hidden");
 }
 
 </script>
 
 <div class="window mt-10 relative max-w-full grow">
     <h1 class="title-bar" style="height:30px;">Gallery</h1>
 <div class="window-body">
 {{< gallery >}}
   <img src="./textrisgif1.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./textrisgif2.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>