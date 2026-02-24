---
title: "A Game For Six Wii Fit Boards"
date: 2025-04-12
draft: false
description: "a description"
tags: ["Weird Input", "Installation", "Game", "Unity"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">A Game For Six Wii Fit Boards</div>
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
    </menu>
    <article role="tabpanel" id="Video">
    {{< youtubeLite id="I1glyjtS0vk" label="AGFSWFB Documentation" >}}
    </article>
    <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
    <p>A Game For Six Wii Fit Boards is a silly party game made for boshi's second birthday, a games event in brooklyn, ny. The game features a series of minigames that require players to leave their board, run onto their board, and battle each other to stay on top of their board.</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2025

### Development Time
one week

### Medium
Unity Game, Six Wii Fit Boards

</div>
    </article>
    <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

### Awards, Recognition, Showcases 
<ul> 
    <li> 2025, Brooklyn, New York. "boshi's second birthday" Featured Work</li>
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
    <h1 class="title-bar" style="height:30px;">
      <div class="title-bar-text">Gallery</div>
    </h1>
<div class="window-body">
{{< gallery >}}
  <img src="./featured.png" class="grid-w40" />
  <img src="./1.jpg" class="grid-w40" />
{{< /gallery >}}
</div>
</div>