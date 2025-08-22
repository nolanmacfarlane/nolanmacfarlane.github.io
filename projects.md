---
layout: game
title: Projects
description: Explore my completed and pending projects.
style: projects.css
script: projects.js
---

<div id="message-screen">
    <div id="message">
        <div id="message-title">
            This project is paused!
        </div>
        <div id="message-text">
            The development of this project is paused, but I have plans to continue later.
        </div>
        <div class="game-button button background-glow" id="message-button">
            Ok   
        </div>
    </div>
</div>

<section id="project-grid-container">
    <div class="project-card inactive"></div>
    {% include project-card.html id="portfolio-site" img="/assets/images/web-development.gif" title="Portfolio Site" text="You are on the site right now!" %}
    <div class="project-card inactive"></div>
    {% include project-card.html id="chess-engine" img="/assets/images/chess-knight.gif" title="Chess Engine" text="Challenge my chess bot" %}
    <img class="pixel-art background-glow" src="/assets/images/bonfire.gif" alt="">
    {% include project-card.html id="metroidvania" img="/assets/images/game-disc.gif" title="Metroidvania" text="Explore a vast underground society" %}
    <div class="project-card inactive"></div>
    {% include project-card.html id="" img="/assets/images/question-mark.gif" title="Unknown" text="Not discovered yet" %}
    <div class="project-card inactive"></div>
</section>
<div class="background-glow" id="footer">
    Created by Nolan MacFarlane
</div>