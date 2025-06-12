---
title: "You Aren't Mario"
date: 2022-02-24
draft: false
description: "a description"
tags: ["Mario", "Zine"]
---
<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">You Aren't Mario</div>
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
    <p>A quick entry to <a target="_blank" href="https://itch.io/jam/undo-jam">UNDO Jam</a><br><br>Big inspiration from <a target="_blank" href="https://muts.itch.io/re-imagine-the-character">imagining the character</a></p>
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
<iframe frameborder="0" src="https://itch.io/embed-upload/5323163?color=7f7fff" allowfullscreen="" width="1280px" height="740"><a href="https://jwhop.itch.io/you-arent-mario">Play YOU AREN'T MARIO on itch.io</a></iframe>
</div>
</div>