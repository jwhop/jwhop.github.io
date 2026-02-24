---
title: "boshi's place Presents: Computer Mouse Games"
date: 2025-08-22
draft: false
description: "a description"
tags: ["Event", "Custom Controller", "Collab", "Weird Input", "Mouse", "boshi"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">Alt Ctrl @ boshi's with Wenxiao Ding</div>
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
    <p>In August 2025 I facilitated and curated a games gallery show in Brooklyn, NY that featured works that utilize the computer mosue in interesting ways. Rather than thinking of the mouse as pointing and clicking, the games featured at the show were more about "mouse as controller".</p>
    <p>Game List:</p>
    <ul>
    <li>Trombone Champ by Studio Wow</li>
    <li>Pogo 3D by Hedgewizards</li>
    <li>The Suzzy Show by Bugfoe</li>
    <li>Scallop Gallop by Jonny Hopkins</li>
    <li>Tilt by Alex Heaton</li>
    <li>Oops! No Brakes by theJaspel</li>
    <li>Ballistic Zen by Alex Hetherington</li>
    <li>and more!</li>
    </ul>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2025

### Responsibilities
Facilitation, Planning, Curation, Developer

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
  <img src="./mouse1.jpg" class="grid-w40" />
  <img src="./mouse2.jpg" class="grid-w40" />
  <img src="./mouse3.jpg" class="grid-w40" />
  <img src="./mouse4.jpg" class="grid-w40" />
  <img src="./mouse5.jpg" class="grid-w40" />
  <img src="./mouse6.jpg" class="grid-w40" />
  <img src="./mouse7.jpg" class="grid-w40" />
  <img src="./mouse8.jpg" class="grid-w40" />
  <img src="./mouse9.jpg" class="grid-w40" />
  <img src="./featured.png" class="grid-w40" />
{{< /gallery >}}
</div>
</div>