---
title: "Open World Shutter Community Jam"
date: 2023-04-01
draft: false
description: "a description"
tags: ["Collab", "Zine", "Jam"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">OWS Community Jam</div>
    <div class="title-bar-controls">
      <!-- <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button> -->
    </div>
  </div>
  <div class="window-body">
    <menu role="tablist">
      <button aria-selected="true" aria-controls="Summary">Summary</button>
      <button aria-selected="false" aria-controls="Details">Details</button>
      <button aria-selected="false" aria-controls="Awards">Awards</button>
      <button aria-selected="false" aria-controls="DevLog">DevLog</button>
    </menu>
    <article role="tabpanel" id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
    <p>--To celebrate <a target="_blank" href="https://jwhop.itch.io/open-world-shutter">Open World Shutter</a> being included in A MAZE 2023, I ran a community photo jam using the tool, and compiled submissions into a zine.--<br><br>Over the course of april, I tasked artists and photographers to capture digital long exposures with Open World Shutter. The goal was to embrace virtual photography and to make art that fits the following theme&nbsp;</p>
<h2 class="text-center">SYNTHESIS</h2>
<p><br></p>
<p>here is the result!&nbsp;<br><br>featuring work from:&nbsp; BigNastyTruck, Ben, Heidi, Tristan, Fortho, Sci + Nick, Forgdeer, D3mark0, Hypern0thingness, Mut, Kookooshka + Cryctok baл, Jwest, Spiffsnaps, Tyler Rhodes, Tipsheda, Kosha, Drew, Patricia, Jackk, Johnlee Cooper, Kent Sheely, Mяybay, and Marquise!<br><br>extra special thanks for JWEST for the cover&nbsp; and itch thumbnail photo,&nbsp;and to BigNastyTruck, SpiffSnaps, Patricia, and Mut for the page backgrounds!<br><br>also shout out to the A MAZE. Berlin team for helping to show the zine at this years festival &lt;3</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2023

### Development Time
one month jam

### Medium
Digital Image using OWS

### Responsibilities
Capturing Images, Creating Zine
</div>
    </article>
    <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

### Awards, Recognition, Showcases 
<ul> 
    <li> 2023, Berlin. <a href="https://2023.amaze-berlin.de/nominees/"><i>A MAZE. Berlin Honorable Mention</i></a></li>
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
  <img src="./ows1.png" class="grid-w40" />
  <img src="./ows2.png" class="grid-w40" />
  <img src="./ows3.png" class="grid-w40" />
  <img src="./ows4.png" class="grid-w40" />
{{< /gallery >}}
</div>
</div>