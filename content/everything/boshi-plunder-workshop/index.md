---
title: "boshi's place plunderludics workshop"
date: 2024-07-14
draft: true
description: "a description"
tags: ["Event", "Plunderludic", "Collab", "Workshop", "boshi"]
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
    <p>In April 2025 I facilitated an event with Alt Ctrl game developer Wenxiao Ding to show custom controller games at boshi's place in Brooklyn, NY. I also showed a couple prototypes of my own at the show.</p>
    <p>Game List:</p>
    <ul>
    <li>Cooked Intel by Wenxiao Ding</li>
    <li>Trashcan Dream by Wenxiao Ding</li>
    <li>Chopstick Challenge by Wenxiao Ding</li>
    <li>Discontrol by Jonny Hopkins</li>
    <li>We Are All Ants by Jonny Hopkins</li>
    <li>Rolopolop by David Shire and Eva Khoury</li>
    </ul>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2025

### Responsibilities
Facilitation, Planning

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
  <img src="./boshialtctrl2.jpg" class="grid-w40" />
  <img src="./boshialtctrl3.jpg" class="grid-w40" />
  <img src="./boshialtctrl4.jpg" class="grid-w40" />
{{< /gallery >}}
</div>
</div>