---
title: "boshi's place x Syzygy: Free Range Indie Games"
date: 2025-03-20
draft: false
description: "a description"
tags: ["Event", "Collab", "boshi"]
---

<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">boshis x syzygy</div>
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
    <p>In March 2025 I helped run a games gallery/party event at GDC in San Francisco. The event was in collaboration with Syzygy, and had about 160 attendees.</p>
    <p>Game List:</p>
    <ul>
    <li>Museum of the Saved Image by Flan</li>
    <li>Laura Takes a Stroll by Mariopartygod</li>
    <li>Discone by Pondlife</li>
    <li>Jungly Jym by Jonny Hopkins and Luca Civita</li>
    <li>Water Level/b.l.u.e EXPLORATION by Hatim Benhsain</li>
    <li>Magenta Gunslinger by Nichole Shinn</li>
    <li>Puzzle Spy International by BAD collective</li>
    <li>and more!</li>
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
  <img src="./syzygy1.jpg" class="grid-w40" />
  <img src="./syzygy3.jpg" class="grid-w40" />
  <img src="./syzygy4.jpg" class="grid-w40" />
  <img src="./syzygy5.jpg" class="grid-w40" />

{{< /gallery >}}
</div>
</div>