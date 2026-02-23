---
title: "Open World Shutter"
date: 2022-04-17
draft: false
description: "a description"
tags: ["Creative Coding", "Tool", "Portfolio"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">Open World Shutter</div>
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
     {{< youtubeLite id="T9JW30air3s" label="OWS Documentation" >}}
     {{< youtubeLite id="rUQEKndirZ4" label="OWS Documentation" >}}
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>"Open World Shutter" is a desktop screenshotting tool to make your game captures more fun! Take screenshots with varying exposure lengths. How will you set up your shots?</p>
    <p>OWS is written in python using mss, cv2, and pyQT. Images are captured of an application window and then are saved, keeping track of average pixels, brightest pixels, and darkest pixels. Video timelapses are also supported!</p>
    <p>check out the <a target="_blank" href="https://github.com/jwhop/Open-World-Shutter">Open World Shutter Source Code on Github</a></p>
    <p>download the <a target="_blank" href="https://jwhop.itch.io/open-world-shutter">Open World Shutter Executable on Itch.io</a></p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2022
 
 ### Development Time
 part-time, 1 month
 
 ### Medium
 Digital Tool using python and PyQT

 ### Responsibilities
 programming, assets
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 
     <li> 2022, Ideal Glass Studio, New York. <a target="_blank" href="https://web.archive.org/web/20230714084438/https://photomode-ubisoft.com/en/">"Ubisoft Presents Photomode: Out There in Games"</a> Featured work</li>
     <li> 2023, Silent Green, Berlin. <a target="_blank" href="https://2023.amaze-berlin.de/nominees/">"A MAZE. BERLIN international Games and Playful Media Festival"</a> Honorable Mention</li>
     <li> 2025, New York, New York. <a target="_blank" href="https://www.are.na/cristobal-sciutto/screenshot-conf">"Screenshot Conf"</a> Featured Talk</li>
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
   <img src="./BigOWS1.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./3.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./botwDarkCode.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./Exposure16Max.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./Exposure82Max.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./Exposure10Avg.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>