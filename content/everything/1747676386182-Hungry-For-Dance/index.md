---
title: "Hungry For Dance"
date: 2022-04-28
draft: false
description: "a description"
tags: ["Collab", "3D Models", "Jam","Game"]
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
    <p>I made this in a couple hours collaboratively on discord, listening in to anyone's input. created for the <a target="_blank" href="https://itch.io/jam/im-hungry">I'm Hungry Jam</a>. Arrow keys to move!</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2022

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
<iframe frameborder="0" src="https://itch.io/embed-upload/5689015?color=333333" allowfullscreen="" width="1300" height="808"><a href="https://jwhop.itch.io/hungry-for-dance">Play Hungry For Dance on itch.io</a></iframe>
</div>
</div>
