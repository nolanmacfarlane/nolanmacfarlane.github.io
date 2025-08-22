---
layout: game
title: Skills
description: Check out the skills I have learned in the past 5 years of my programming journey.
style: skills.css
script: skills.js
---

<div id="path"></div>
<section id="file-containers">
    <section id="left-file-container">
        <div class="button folder" id="skill">skills</div>
        <div class="button folder" id="tool">tools</div>
    </section>
    <section id="main-file-container">
        <div class="button file skill" id="C" data-logo="/assets/images/c-logo.webp" data-description="I studied the C programming language in my first computer science course at UVic (CSC 111). Prior to this course, I had already learned Java and C# so the jump wasn't too difficult. The course covered the following topics: Variables, Functions, File I/O, Pointers, Linked Lists and Memory Management. I have yet to use C in any projects." data-experience="2" data-proficiency="2" data-usecases="1" data-recency="4">
            C.txt
            <div class="file-size">372.7 kB</div>
        </div>
        <div class="button file skill" id="C#" data-logo="/assets/images/c-sharp-logo.webp" data-description="C# is the main language I used during my game development course in high school. During the course, I made several small projects in the Unity game engine which helped famililarize myself with object oriented programming. I am curently using C# in my metroidvania game project." data-experience="4" data-proficiency="3" data-usecases="3" data-recency="3">
            C#.txt
            <div class="file-size">238.5 kB</div>
        </div>
        <div class="button file skill" id="Java" data-logo="/assets/images/java-logo.webp" data-description="I first learned Java in computer science 12 in high school. I picked it up pretty quick since the syntax is almost identical to C#. I also studied Java in CSC 115 at UVic where they covered the following topics: Classes and Objects, Recursion, Runtime Analysis, Generics, Exceptions, Data Structures and Sorting Algorithms." data-experience="4" data-proficiency="3" data-usecases="2" data-recency="4">
            Java.txt
            <div class="file-size">57.1 kB</div>
        </div>
        <div class="button file skill" id="JavaScript" data-logo="/assets/images/javascript-logo.webp" data-description="JavaScript was the first programming language I learned. In highschool, I used it to make fun animations or games with the canvas. Recently, the main project in my ENGR 120 course required my team to design a web page that worked with a Raspberry Pi Pico to display sensor information. I volunteered to program the entire webpage since I had the most experience. This project lead me down a rabbit hole of web development that brought me to designing this portfolio site using plain JavaScript, HTML and CSS." data-experience="3" data-proficiency="3" data-usecases="4" data-recency="5">
            JavaScript.txt
            <div class="file-size">242.5 kB</div>
        </div>
        <div class="button file skill" id="HTML" data-logo="/assets/images/html-logo.webp" data-description="See JavaScript.txt." data-experience="3" data-proficiency="4" data-usecases="4" data-recency="5">
            HTML.txt
            <div class="file-size">49.0 kB</div>
        </div>
        <div class="button file skill" id="CSS" data-logo="/assets/images/css-logo.webp" data-description="See JavaScript.txt." data-experience="3" data-proficiency="4" data-usecases="4" data-recency="5">
            CSS.txt
            <div class="file-size">89.4 kB</div>
        </div>
        <div class="button file skill" id="Python" data-logo="/assets/images/python-logo.webp" data-description="In the project mentioned in JavaScript.txt, we also needed to program the behavior of the Raspberry Pi Pico using python." data-experience="2" data-proficiency="3" data-usecases="2" data-recency="4">
            Python.txt
            <div class="file-size">29.9 kB</div>
        </div>
        <div class="button file skill" id="Unity" data-logo="/assets/images/unity-logo.webp" data-description="As mentioned in C#.txt, I used Unity to make several small games in highschool. I have also been using Unity for the last 2 years to develop my metroidvania game. I have experience with the following Unity features: Post Processing, Lighting, UI, Sound, Prefabs, Scriptable Objects, Particle System and Input System (Keyboard or Controller)." data-experience="3" data-proficiency="3" data-usecases="3" data-recency="3">
            Unity.txt
            <div class="file-size">162.5 kB</div>
        </div>
        <div class="button file tool" id="Ubuntu" data-logo="/assets/images/ubuntu-logo.webp" data-description="I recently switched to Ubuntu from Windows because I thought it would be fun to try a new operating system and mess around with customization." data-functionality="5" data-aesthetic="4" data-customizability="5" data-support="4">
            Ubuntu.txt
            <div class="file-size">10.3 kB</div>
        </div>
        <div class="button file tool" id="Zen Browser" data-logo="/assets/images/zen-browser-logo.webp" data-description="I was recommended this browser from a friend and have absolutely fallen in love with the organization and customization options." data-functionality="5" data-aesthetic="5" data-customizability="5" data-support="4">
            Zen Browser.txt
            <div class="file-size">392.5 kB</div>
        </div>
        <div class="button file tool" id="Visual Studio Code" data-logo="/assets/images/vs-code-logo.webp" data-description="Visual Studio used to be my main coding environment (it works really well with Unity), but I switched to Visual Studio Code because it is available on Ubuntu. While it definitely has less features, it has everything I need for now and can be easily customized with extensions." data-functionality="5" data-aesthetic="4" data-customizability="5" data-support="5">
            Visual Studio Code.txt
            <div class="file-size">62.2 kB</div>
        </div>
    </section>
    <section id="info-container">
        <img id="file-logo" src="" alt="">
        <h1 id="file-title"></h1>
        <p id="file-description"></p>
        <section id="file-stats">
            <div id="stat-title-container">
                <div class="stat-title skill">Experience</div>
                <div class="stat-title skill">Proficiency</div>
                <div class="stat-title skill">Use Cases</div>
                <div class="stat-title skill">Recency</div>
                <div class="stat-title tool">Functionality</div>
                <div class="stat-title tool">Aesthetic</div>
                <div class="stat-title tool">Customizability</div>
                <div class="stat-title tool">Support</div>
            </div>
            <div id="stat-bar-container">
                {% include stat-bar.html class="skill" id="experience" %}
                {% include stat-bar.html class="skill" id="proficiency" %}
                {% include stat-bar.html class="skill" id="usecases" %}
                {% include stat-bar.html class="skill" id="recency" %}
                {% include stat-bar.html class="tool" id="functionality" %}
                {% include stat-bar.html class="tool" id="aesthetic" %}
                {% include stat-bar.html class="tool" id="customizability" %}
                {% include stat-bar.html class="tool" id="support" %}
            </div>
        </section>
    </section>
</section>
<div id="footer">
    <div id="file-metadata"></div>
    <div id="credit">Created by Nolan MacFarlane - Inspired by Ranger CLI</div>
    <div id="storage">324 GB free</div>
</div>