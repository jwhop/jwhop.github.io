---
title: "Jungle Jym"
date: 2024-05-17
draft: false
description: "a description"
tags: ["Collab", "Procedural Animation", "Physics", "3D Models", "Shaders", "Class Assignment", "Favorite","Game", "Portfolio"]
---


<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">Jungle Jym</div>
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
      <button aria-selected="false" aria-controls="DevLog">DevLog</button>
    </menu>
    <article role="tabpanel" id="Video">
        {{< vimeo 944679065 >}}
    </article>
    <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

*Jungle Jym* is a collection four distinct animal-specific sport mini-games, each offering completely unique ways of controlling characters and employing different rendering techniques. Created with Luca Civita.
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2024

### Development Time
MFA Thesis + ongoing part time work

### Medium
Digital Game

### Responsibilities
<ul> 
    <li> <i>Beet down</i>: concept, modeling, procedural animation, shader work, programming</li>
    <li> <i>Turgle Tag</i>: concept, modeling, procedural animation, programming</li>
    <li> <i>Rog Frace</i>: modeling, procedural animation</li>
</ul>
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

<div class="window mt-10 relative max-w-full grow">
    <h1 class="title-bar" style="height:30px;">Gallery</h1>
<div class="window-body">
{{< gallery >}}
<img src="./indiecade1.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
<img src="./indiecade2.jpg" class="grid-w33 md:grid-w33 xl:grid-w25" />
{{< /gallery >}}
</div>
</div>