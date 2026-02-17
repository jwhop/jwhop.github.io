---
title: "Mario Tag"
date: 2024-03-28
draft: false
description: "a description"
tags: ["Plunderludic", "Installation", "Mario","Game", "Portfolio"]
---

 <div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text"> Mario Tag </div>
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
     {{< youtubeLite id="pul43sdWO8k" label="Mario Tag Documentation" >}}
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>“Mario Tag” is a 360 degree 2-player videogame collage take on Mario, using practices of “plunderludics” to manipulate the original ROM and two simultaneous NES emulator instances. Each Mario runs around a looping screen to a different level, racing to hold onto a flag longer than their opponent. Created with Plunderludics Working Group.</p>
     </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2024
 
 ### Development Time
 part time, 3 months
 
 ### Medium
 Digital Game for custom display

 ### Responsibilities
 Shared concept work, shader programming, bug fixing
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 
     <li> 2024, Boshi's Place, Brooklyn, New York. "Boshi's 1st Birthday" Featured work</li>
     <li> 2024, Hong Kong Baptist University, Kowloon Tong, Hong Kong. "Looped Play" Commissioned work</li>
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
   <img src="./mariotag.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./mariotag1.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./mariotag2.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>