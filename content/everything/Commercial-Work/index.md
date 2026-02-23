---
title: "Commercial Developer Work"
date: 2026-02-22
draft: false
description: "a description"
tags: ["Portfolio", "Commercial", "Unreal Engine", "Unity", "three.js"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">Commercial Developer Work</div>
     <div class="title-bar-controls">
       <!-- <button aria-label="Minimize"></button>
       <button aria-label="Maximize"></button>
       <button aria-label="Close"></button> -->
     </div>
   </div>
   <div class="window-body">
     <menu role="tablist">
       <button aria-selected="true" aria-controls="Video">Presentation</button>
       <button aria-selected="false" aria-controls="Summary">Summary</button>
       <button aria-selected="false" aria-controls="Details">Details</button>
     </menu>
     <article role="tabpanel" id="Video">
     <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSVj7w1TDhlMpsprQcr9DXZIw5q2IpnRfFr4mysclT9FNjajDOMKZHdnxFc4s9E4g/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="700" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p>For over six years now I have been working as a creative developer at Virtual Construction Lab in NYC. Here is a list of what I've done over the years:</p>
     <p>- (current) Writing a typescript library executing an AST for window / door / façade visualization by breaking down assembly (extrusions, translations, mitering, notching) into modular 3D vector operations </p>
 <p>-	Lead three.js development on Building Physics Solver, a cloud-based calculation tool that simulates structural, thermal, and acoustic usability of windows / façades for architects and fabricators in Germany, France, and the United States</p>
 <p>-	Developed system for on-the-fly three.js 3D model generation of sliding doors for fabricators on e-commerce website by utilizing extruded geometry, 3D boolean operations, and custom data structures of part information</p>
 <p>-	Developed multiple training simulation games using Unreal Engine 4 for new fabrication employees to teach them about types of window vent openings and the process for window assembly </p>
 <p>-	Wrote C++ Software in Unreal Engine 4 to enable clients to make their own 3D animations of window part construction for a unified documentation library and for sales proposals</p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2019 - Present
 
 ### Development Time
 full-time
 
 ### Medium
 Unreal Engine C++, Unreal Engine Virtual Production, Unity, three.js, typescript

 ### Responsibilities
 lead three.js developer, creative developer
 </div>
     </article>
     <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 
 ### Awards, Recognition, Showcases 
 <ul> 

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
   <img src="./1.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./2.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./3.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./4.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./5.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./6.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./7.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./8.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./9.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./10.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./11.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./12.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./13.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./featured.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./15.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./16.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>

