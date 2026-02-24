---
title: "Topsy Turpsy"
date: 2025-01-23
draft: false
description: "a description"
tags: ["Weird Input", "Game", "Collab", "Unity"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">Topsy Turpsy</div>
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
    </menu>
    <article role="tabpanel" id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
    <p>Topsy Turpsy is a 5 player wii fit board game made for MAGfest 2025 where each player is a turtle on a log. The net position of each player on the log determines its rotation.</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2025

### Responsibilities
Programming, Modeling, Development

</div>
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
  <img src="./IMG_1121.jpg" class="grid-w40" />
  <img src="./IMG_1122.jpg" class="grid-w40" />
  <img src="./IMG_1123.jpg" class="grid-w40" />
{{< /gallery >}}
</div>
</div>