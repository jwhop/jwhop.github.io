---
title: "tetris, but all at once"
date: 2022-03-02
draft: false
description: "a description"
tags: ["Plunderludic", "Tetris", "Game", "Favorite", "Portfolio"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">tetris, but all at once</div>
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
       <!--<button aria-selected="false" aria-controls="DevLog">DevLog</button> -->
     </menu>
     <article role="tabpanel" id="Video">
     {{< youtubeLite id="jPjFfkR0quA" label="TBAAO Documentation" >}}
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>Ever just wish there was more tetris? Look no further, with "tetris, but all at once". Every time you clear a line of tetris, a new one spawns. Through being able to control many instances of tetris at once, discover and feel the textures of each game.</p>
    <p>TBAAO is written in a Lua script that attaches to the bizhawk emulator. I look at specific memory addresses in each game [when lines are cleared] and use a winapi lua call to resize + tile the windows as a new one spawns in. Major credit on how to make something like this goes to <a target="_blank" href="https://www.alistairaitcheson.com/games/magicbox.html">Alistair Aitcheson's Magic Box!</a></p>
    <p>check out the game <a target="_blank" href="https://jwhop.itch.io/tetris-but-all-at-once">here!</a> password is 'gaw'</p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2023
 
 ### Development Time
 part-time, 1 week
 
 ### Medium
 Lua Script, Bizhawk Emulator, tetris ROMS

 ### Responsibilities
 programming
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 
    <li> 2022, Babycastles, Brooklyn, New York. <a target="_blank" href="https://www.instagram.com/p/Clh1jzxNE2X/?hl=en">"babycastles: maybe the last event ever maybe"</a> Featured work</li>
     <li> 2023, boshi's place, Brooklyn, New York. <a target="_blank" href="https://plunderludics.github.io/devlogs/2023-02-25%20spring%20salad.html">"Spring Salad: A Plunderludic Gathering"</a> Featured work</li>
     <li> 2024, LIKELIKE, Pittsburgh, Pennsylvania. <a target="_blank" href="https://likelike.org/2024/05/29/plundergames/">"PLUNDERGAMES"</a> Featured work</li>
     <li> 2025, Online. <a target="_blank" href="https://eggplant.show/145-addressing-memory-with-plunderludics">"The Secret Lives of Games"</a> Podcast Episode</li>
 </ul>
     </article>
     <article role="tabpanel" hidden id="DevLog"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Development Log
 TBA. Add in progress pics here  
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
   <img src="./tbaaocover.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC1.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC2.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC3.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC4.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC5.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC6.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./TBAAOSC7.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>