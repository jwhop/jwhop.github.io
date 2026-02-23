---
title: "Still Life"
date: 2017-12-20
draft: false
description: "a description"
tags: ["Pixel Art", "Favorite"]
---
<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">Still Life</div>
    <div class="title-bar-controls">
      <!-- <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close"></button> -->
    </div>
  </div>
  <div class="window-body">
    <menu role="tablist">
      <button aria-selected="true" aria-controls="Video">Work</button>
      <button aria-selected="false" aria-controls="Summary">Summary</button>
      <button aria-selected="false" aria-controls="Details">Details</button>
    </menu>
    <article role="tabpanel" id="Video">
        <img src="./featured.gif"/>
    </article>
    <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

"Still Life" is my first attempt at learning to make pixel art. It is based on a photograph of my partner Patricia at the Metropolitan Museum of Art. Using a variety of different photoshop techniques and my own hand-drawn animation, I made this artwork from the picture. I scaled down the image to get the approximate shapes of everything, then I did a lot of the coloring + lighting by drawing over the image with different brushes. It remains one of my favorite pieces. :^)
        <img src="./original.JPG"/>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2017

### Development Time
a couple weeks

### Medium
Animated GIF

</div>
    </article>
    <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

### Awards, Recognition, Showcases 
<ul>
    <li> 2024, Los Angeles. <a href="https://www.musiccenter.org/experience-learn/experience-learn/for-all-ages/digital-innovation-initiative/night-games/"><i>Indiecade Night Games</i></a> Selection</li>
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