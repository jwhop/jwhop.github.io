---
title: "We Are All Ants"
date: 2023-05-31
draft: false
description: "a description"
tags: ["Weird Input", "Procedural Animation", "Touch Screen", "3D Models", "Installation", "Class Assignment", "Animals", "Favorite","Game"]
---


<div class="window max-w-full">
  <div class="title-bar">
    <div class="title-bar-text">We Are All Ants</div>
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
    {{< youtubeLite id="nK38WSVcQvg" label="We Are All Ants Documentation" >}}
    </article>
    <article role="tabpanel" hidden id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
    <p>We are all ants is a game for 2 to 10 fingers, and however many players that involves. Made using touch input and a custom physical installation, players look down on a screen where each of their fingers turns into a procedurally animated ant. Work together to move things around!</p>
    </article>
    <article role="tabpanel" hidden id="Details"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
<div class="flex flex-col" style="justify-content: space-between">

### Year
2023

### Development Time
started as school assignment, then a few weeks of part time work

### Medium
Touch Screen, External Display

### Responsibilities
Misc. 3D Art (ants, food props), programming, installation
</div>
    </article>
    <article role="tabpanel" hidden id="Awards"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

### Awards, Recognition, Showcases 
<ul> 
    <li> 2024, Brooklyn, New York. "Wonderville Pop Up Arcade" Featured Work</li>
    <li> 2024, District of Columbia. "MAGfest Indie Arcade" Featured Work</li>
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
  <img src="./ants1.jpg" class="grid-w40" />
  <img src="./ants3.jpg" class="grid-w40" />
  <img src="./ants2.jpg" class="grid-w40" />
  <img src="./ants4.jpg" class="grid-w40" />
  <img src="./ants5.jpg" class="grid-w40" />
{{< /gallery >}}
</div>
</div>