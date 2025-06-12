---
title: "About Me"
description: "Learn how to use Blowfish and its features."

cascade:
  showDate: false
  showAuthor: false
  invertPagination: true
---

 <div class="window " style="max-width: 1000px !important;">
   <div class="title-bar">
     <div class="title-bar-text">Bio</div>
     <div class="title-bar-controls">
       <!-- <button aria-label="Minimize"></button>
       <button aria-label="Maximize"></button>
       <button aria-label="Close"></button> -->
     </div>
   </div>
   <div class="window-body">
     <menu role="tablist">
       <button aria-selected="true" aria-controls="Summary">Summary</button>
       <button aria-selected="false" aria-controls="Resume">Resume / CV</button>
     </menu>
     <article role="tabpanel" id="Summary" style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">
      <div class="flex flex-row bio-summary " style="vertical-align: top;">
        <img class="nozoom" src="/headshot.jpg" style="object-fit: contain; max-width:300px; max-height:300px; width: auto; height: auto; padding:20px; margin: 0px;">
        <p style="padding:15px; margin: 0px; font-size: clamp(6px, 3vw, 14px);">
          Thanks for checking out my website! I'm Jonny, I like making games and playful art. I really enjoy the physicality of games and input, as well as the social play that emerges in games. Currently, I'm thinking about animals playing sports, plunderludics, boshi's place, and weird ways to use a computer mouse. 
          <br> <br>When I'm not making stuff, you can find me running, climbing, baking fruit pies, watching movies, or playing games (Blood on the Clocktower and Deadlock are my favorites right now:^)
        </p>
      </div>
     </article>
     <article role="tabpanel" hidden id="Resume"  style="color: black; font-size: 14px; font-variant: JIS04; font-family: arial;">

### Resume
<a href="/2025_Resume.pdf" download>here</a>

### CV
<a href="/CV1.2.pdf" download>here</a>

### Teaching Portfolio
<a href="/Teaching_Portfolio.pdf" download>here</a>

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
     <h1 class="title-bar" style="height:30px;">Praise</h1>
 <div class="window-body">
 {{< gallery >}}
   <img src="/praise/1.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/2.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/3.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/4.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/5.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/6.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/7.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/8.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
   <img src="/praise/9.png" class="grid-w33 md:grid-w33 xl:grid-w25" />
 {{< /gallery >}}
 </div>
 </div>

   
