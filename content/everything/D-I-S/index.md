---
title: "Tranquilizer Visuals"
date: 2025-11-01
draft: false
description: "a description"
tags: ["Portfolio", "Favorite", "Shaders", "Commercial", "Unity"]
---
<div class="window max-w-full">
   <div class="title-bar">
     <div class="title-bar-text">Tranquilizer Visuals</div>
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
     </menu>
     <article role="tabpanel" id="Video">
     {{< youtubeLite id="m37fxR_EXFM" label="DIS Documentation" >}}
     </article>
     <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
     <p> In fall 2025 I helped develop visuals for Oneohtrix Point Never's 'Tranquilizer' album tour. The tour had several stops across Europe in 2025 and will stop in Japan and the US in 2026. The album tour features a combination of Touch Designer + live Unity visuals, where each track has its own shader effect + virtual environment. I helped set up convert some 2D concept art into Unity scenes and blender models for a few of the tracks and was in charge of concept + shader development for the song <a target="_blank" href="https://www.youtube.com/watch?v=CEeCziXT2FE">"D.I.S."</a> (no relation to music video visuals)</p>
     <p> The song's inspiration was from getting lost in TV static. From a technical standpoint, some challenges included not making the visuals too hard to see but making them still blend in with moving static. The final result ended up being a blend of ordered noise, world-space dithering similar to "Return of the Obra Dinn', depth-based noise animation, and normal-based noise scrolling. </p>
     <p> Attached are several work-in-progress images and videos. A particular challenge was recording a video that accurately captured the noise without being a huge file (hence why some of the documentation is a phone recording of the computer screen) </p>
    </article>
     <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
 <div class="flex flex-col" style="justify-content: space-between">
 
 ### Year
 2025
 
 ### Development Time
 part-time, 1.5 months
 
 ### Medium
 Unity, HLSL

 ### Responsibilities
 shader development, setting up scenes [portions of shader stack + post processing such as edge detection and interlacing 'fuzzy' look are not my work]
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
   <img src="./featured.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./orderednoise2.gif" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./fixedConcertLarge.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="./dis2.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>