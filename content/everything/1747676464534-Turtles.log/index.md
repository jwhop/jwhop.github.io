---
title: "Turtles.log"
date: 2023-03-07
draft: false
description: "a description"
tags: ["Networked Multiplayer", "3D Models", "Class Assignment", "Animals", "Favorite","Game"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">Turtles.log</div>
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
    <p>A quick prototype based on the theme of sharing. (Wait several seconds for it to load) hang out on a log with friends! arrow keys to swap sides. anyone currently playing the game appears on the same log. if you are on the same side of the log, it will rotate. if the log is balanced, it wont!</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2023

### Development Time
One Day

### Medium
Networked Multiplayer Game using Photon, Unity

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

<div class="window mt-10" style="display: block; width: fit-content;">
    <h1 class="title-bar" style="height:30px;">Embed</h1>
<div class="window-body">
<iframe frameborder="0" src="https://itch.io/embed-upload/7478821?color=317e40" allowfullscreen="" width="1280" height="780"><a href="https://jwhop.itch.io/turtleslog">Play turtles.log on itch.io</a></iframe>
</div>
</div>