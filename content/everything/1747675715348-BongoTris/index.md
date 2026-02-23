---
title: "BongoTris"
date: 2019-03-14
draft: false
description: "a description"
tags: ["Custom Controller", "Tetris", "Favorite"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">Hangboard Controller</div>
     <div class="title-bar-controls">
       <!-- <button aria-label="Minimize"></button>
       <button aria-label="Maximize"></button>
       <button aria-label="Close"></button> -->
     </div>
   </div>
   <div class="window-body">
     <menu role="tablist">
       <button aria-selected="true" aria-controls="Video">Tweet</button>
       <button aria-selected="false" aria-controls="Summary">Summary</button>
       <button aria-selected="false" aria-controls="Details">Details</button>
     </menu>
     <article role="tabpanel" id="Video">
     <blockquote class="twitter-tweet"><p lang="en" dir="ltr">BongoTris <a href="https://x.com/jwhopkin/status/1106355000437960704"></a></p>&mdash; jonny hopkins🕹 (@jwhopkin) <a href="https://twitter.com/jwhopkin/status/1106355000437960704">March 14, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>BongoTris is a custom controller adapting a set of Donkey Kong bongos to be compatible with the nintendo switch for playing Tetris 99. [This was before Nintendo added functionality for the remapping gamecube-compatible controllers with the switch]. My technical implementation involved finding a program online that reads gamecube controller inputs for visualizing them on twitch streams, and plugging that in to a custom HID USB project that runs on Arduino.</p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2019
 
 ### Development Time
 part-time, ~1 week
 
 ### Medium
 Custom HID firmware, Arduino Sketch

 ### Responsibilities
 programming
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 
     <li> 2020, Online. <a target="_blank" href="https://www.youtube.com/watch?v=XVCHNa_nkRk">Freeplay Independent Games Festival 2020</a> Featured Talk</li>

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
   <img src="./featured.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./2.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./fixed3.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>