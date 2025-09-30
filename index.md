---
layout: home
title: Home
style: home.css
script: 
  - home.js
  - input.js
---

<div id="title">Files</div>
<div id="clock">12:00:00</div>
<div id="path-container">
    <div id="user">nolanmacfarlane@portfolioOS:~$ </div>
    <div id="path"></div>
    <div id="current-file"></div>
</div>
<section id="file-containers">
    <section id="left-file-container">
        <div class="button folder" id="about">about</div>
        <div class="button folder" id="skill">skills</div>
        <div class="button folder" id="project">projects</div>
        <div class="button folder" id="tool">tools</div>
        <div class="button folder" id="config">.config</div>
    </section>
    <section id="main-file-container">
        <div class="button file about" id="Nolan MacFarlane" data-logo="/assets/images/nolan.txt" data-description="Hi I'm Nolan MacFarlane! I am currently a software engineering student at UVic with a passion for UI design and game development. I have experience with C# and I am learning HTML, CSS and JavaScript. Outside of school and coding I enjoy playing tennis, video games, violin and cooking." data-links="resume github email">
            Nolan MacFarlane.txt
            <div class="file-size">27.4 kB</div>
        </div>
        <div class="button file skill" id="C" data-logo="/assets/images/c.txt" data-description="I studied the C programming language in my first computer science course at UVic (CSC 111). Prior to this course, I had already learned Java and C# so the jump wasn't too difficult. The course covered the following topics: Variables, Functions, File I/O, Pointers, Linked Lists and Memory Management. I have yet to use C in any projects.">
            C.txt
            <div class="file-size">372.7 kB</div>
        </div>
        <div class="button file skill" id="C#" data-logo="/assets/images/c-sharp.txt" data-description="C# is the main language I used during my game development course in high school. During the course, I made several small projects in the Unity game engine which helped famililarize myself with object oriented programming. I am curently using C# in my metroidvania game project.">
            C#.txt
            <div class="file-size">238.5 kB</div>
        </div>
        <div class="button file skill" id="Java" data-logo="/assets/images/java.txt" data-description="I first learned Java in computer science 12 in high school. I picked it up pretty quick since the syntax is almost identical to C#. I also studied Java in CSC 115 at UVic where they covered the following topics: Classes and Objects, Recursion, Runtime Analysis, Generics, Exceptions, Data Structures and Sorting Algorithms.">
            Java.txt
            <div class="file-size">57.1 kB</div>
        </div>
        <div class="button file skill" id="JavaScript" data-logo="/assets/images/javascript.txt" data-description="JavaScript was the first programming language I learned. In highschool, I used it to make fun animations or games with the canvas. Recently, the main project in my ENGR 120 course required my team to design a web page that worked with a Raspberry Pi Pico to display sensor information. I volunteered to program the entire webpage since I had the most experience. This project lead me down a rabbit hole of web development that brought me to designing this portfolio site using plain JavaScript, HTML and CSS.">
            JavaScript.txt
            <div class="file-size">242.5 kB</div>
        </div>
        <div class="button file skill" id="HTML" data-logo="/assets/images/html.txt" data-description="See JavaScript.txt.">
            HTML.txt
            <div class="file-size">49.0 kB</div>
        </div>
        <div class="button file skill" id="CSS" data-logo="/assets/images/css.txt" data-description="See JavaScript.txt.">
            CSS.txt
            <div class="file-size">89.4 kB</div>
        </div>
        <div class="button file skill" id="Python" data-logo="/assets/images/python.txt" data-description="In the project mentioned in JavaScript.txt, we also needed to program the behavior of the Raspberry Pi Pico using python.">
            Python.txt
            <div class="file-size">29.9 kB</div>
        </div>
        <div class="button file skill" id="Unity" data-logo="/assets/images/unity.txt" data-description="As mentioned in C#.txt, I used Unity to make several small games in highschool. I have also been using Unity for the last 2 years to develop my metroidvania game. I have experience with the following Unity features: Post Processing, Lighting, UI, Sound, Prefabs, Scriptable Objects, Particle System and Input System (Keyboard or Controller).">
            Unity.txt
            <div class="file-size">162.5 kB</div>
        </div>
        <!-- TODO: Add API call to get real github repo description. -->
        <div class="button file project" id="Portfolio Website" data-logo="/assets/images/ui.txt" data-description="" data-links="github-portfolio">
            Porfolio Website.txt
            <div class="file-size">55 MB</div>
        </div>
        <div class="button file project" id="Chess Engine" data-logo="/assets/images/chess-knight.txt" data-description="nmacBot is a simple chess engine in Java. The chess engine features a basic Java gui for local games against other players or the bot. The engine uses the lichess-bot github repository to connect to lichess online." data-links="github-chess">
            Chess Engine.txt
            <div class="file-size">20 MB</div>
        </div>
        <div class="button file tool" id="Ubuntu" data-logo="/assets/images/ubuntu.txt" data-description="I recently switched to Ubuntu from Windows because I thought it would be fun to try a new operating system and mess around with customization.">
            Ubuntu.txt
            <div class="file-size">10.3 kB</div>
        </div>
        <div class="button file tool" id="Zen Browser" data-logo="/assets/images/zen.txt" data-description="I was recommended this browser from a friend and have absolutely fallen in love with the organization and customization options.">
            Zen Browser.txt
            <div class="file-size">392.5 kB</div>
        </div>
        <div class="button file tool" id="Visual Studio Code" data-logo="/assets/images/vs-code.txt" data-description="Visual Studio used to be my main coding environment (it works really well with Unity), but I switched to Visual Studio Code because it is available on Ubuntu. While it definitely has less features, it has everything I need for now and can be easily customized with extensions.">
            Visual Studio Code.txt
            <div class="file-size">62.2 kB</div>
        </div>
        <div class="button file config" id="Theme" data-logo="" data-description="Customize the theme of the site by editing the text file." data-input="theme-input">
            Theme.txt
            <div class="file-size">4.1 kB</div>
        </div>
        <div class="button file config" id="UI" data-logo="" data-description="Customize the UI elements of the site by editing the text file." data-input="ui-input">
            UI.txt
            <div class="file-size">3.6 kB</div>
        </div>
    </section>
    <section id="info-container">
        <div id="file-logo"></div>
        <h1 id="file-title"></h1>
        <p id="file-description"></p>
        <div id="link-container">
            <a class="button" id="resume" href="/assets/files/NolanMacFarlane.pdf" target="_blank">Resume (PDF)</a>
            <a class="button" id="github" href="https://github.com/nolanmacfarlane" target="_blank">Github</a>
            <a class="button" id="email" href="mailto:nolanmacfarlane05@gmail.com" target="_blank">Email</a>
            <a class="button" id="github-portfolio" href="https://github.com/nolanmacfarlane/nolanmacfarlane.github.io" target="_blank">Github</a>
            <a class="button" id="github-chess" href="https://github.com/nolanmacfarlane/Chess-Engine" target="_blank">Github</a>
        </div>
        <form id="form">
            <textarea id="theme-input" class="input" rows="8" cols="60" spellcheck="false" maxlength="500">
# Uncomment the theme you want to select
# If multiple themes are selected then the bottom-most theme takes priority

theme=default
# theme=solarized
# theme=solarized-dark
# theme=rosepine-moon</textarea>
            <textarea id="ui-input" class="input" rows="8" cols="60" spellcheck="false" maxlength="500">
# Change the value to true or false to enable/disable visibility

clock=true
path=true
bottombar=true</textarea>
        </form>
    </section>
</section>
<div id="footer">
    <div id="file-metadata"></div>
    <div id="credit">Created by Nolan MacFarlane - Inspired by Ranger CLI</div>
    <div id="storage">324 GB free</div>
</div>