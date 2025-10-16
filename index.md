---
layout: home
title: Home
style: 
  - home.css
  - lichess-pgn-viewer.css
script: 
  - home.js
  - input.js
  - lichessbot.js
---

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
        <div class="button file about" id="Nolan MacFarlane" data-logo="/assets/images/nolan.txt" data-description="Hi I'm Nolan MacFarlane! I am currently a software engineering student at UVic with a passion for UI design and game development. I have experience with C# and I am learning HTML, CSS and JavaScript. Outside of school and coding I enjoy playing tennis, video games, violin and cooking." data-links="resume resume-html github email">
            Nolan MacFarlane.txt
            <div class="file-size">27.4 kB</div>
        </div>
        <div class="button file skill" id="C" data-logo="/assets/images/c.txt" data-description="I studied the C programming language in my first computer science course at UVic (CSC 111). Prior to this course, I had already learned Java and C# so the jump wasn't too difficult. The course covered the following topics: Variables, Functions, File I/O, Pointers, Linked Lists and Memory Management.">
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
        <div class="button file skill" id="JavaScript" data-logo="/assets/images/javascript.txt" data-description="JavaScript was the first programming language I learned. In highschool, I used it to make fun animations or games with the canvas. Recently, I have been using JavaScript along with HTML, and CSS to design this website.">
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
        <div class="button file skill" id="Unity" data-logo="/assets/images/unity.txt" data-description="As mentioned in C#.txt, I used Unity to make several small games in highschool. I have also been using Unity for the last 2 years to develop my metroidvania game. I have experience with the following Unity features: Post Processing, Lighting, UI, Sound, Prefabs, Scriptable Objects, Particle System and Input System (Keyboard or Controller).">
            Unity.txt
            <div class="file-size">162.5 kB</div>
        </div>
        <div class="button file project" id="Portfolio Website" data-logo="/assets/images/ui.txt" data-description="I built this site to host my projects, skills and experiences as well as, practice my HTML, CSS and JavaScript skills. It has gone through many iterations and will continue to evolve as my skills improve. I am always trying to learn something new; Let me know if you have any suggestions for my site! :)" data-links="github-portfolio">
            Porfolio Website.txt
            <div class="file-size">55 MB</div>
        </div>
        <div class="button file project" id="Chess Engine" data-logo="/assets/images/chess-knight.txt" data-description="nmacBot is a UCI compatible chess engine in Java. The chess engine features a basic Java gui for local games against other players or the bot. The engine uses the lichess-bot github repository to connect to lichess online." data-links="github-chess" data-div="lichess-game">
            Chess Engine.txt
            <div class="file-size">20 MB</div>
        </div>
        <div class="button file project" id="Metroidvania Game" data-logo="/assets/images/controller.txt" data-description="I have been developing a metroidvania game in the Unity game engine with C# inspired by Hollow Knight and Animal Well. I plan on adding a polished web demo to the website in the future. Here are a few screenshots of the progress so far." data-div="metroidvania-screenshots">
            Metroidvania Game.txt
            <div class="file-size">2.7 GB</div>
        </div>
        <div class="button file project" id="HospiFlow" data-logo="/assets/images/heart-pulse.txt" data-description="HospiFlow is a bed and patient management system that my team and I designed in ENGR 120. It uses a Raspberry Pi Pico along with a breadboard circuit to collect data about patients' beds occupation status and displays the information on a device-hosted webpage. The concept is intended to be integrated with other admin tools to optimize patient management. I developed the micropython and webpage code." data-links="github-hospiflow" data-div="hospiflow-images">
            HospiFlow.txt
            <div class="file-size">1.2 kB</div>
        </div>
        <div class="button file tool" id="Ubuntu" data-logo="/assets/images/ubuntu.txt" data-description="I recently switched to Ubuntu from Windows because I thought it would be fun to try a new operating system and mess around with customization.">
            Ubuntu.txt
            <div class="file-size">10.3 kB</div>
        </div>
        <div class="button file tool" id="Zen Browser" data-logo="/assets/images/zen.txt" data-description="Undoubtedly, the best browser for productivity, organization and customization. It's open source too.">
            Zen Browser.txt
            <div class="file-size">392.5 kB</div>
        </div>
        <div class="button file tool" id="Visual Studio Code" data-logo="/assets/images/vs-code.txt" data-description="Visual Studio used to be my main coding environment (it works really well with Unity), but I switched to Visual Studio Code because it is available on Ubuntu. While it definitely has less features, it has everything I need for now and can be easily customized with extensions.">
            Visual Studio Code.txt
            <div class="file-size">62.2 kB</div>
        </div>
        <div class="button file config" id="Theme" data-logo="" data-description="Customize the theme of the site by editing the text file." data-div="theme-input">
            Theme.txt
            <div class="file-size">4.1 kB</div>
        </div>
        <div class="button file config" id="UI" data-logo="" data-description="Customize the UI elements of the site by editing the text file." data-div="ui-input">
            UI.txt
            <div class="file-size">3.6 kB</div>
        </div>
        <div class="button file config" id="Text Effects" data-logo="" data-description="Customize the text effects of the site by editing the text file." data-div="effect-input">
            Text Effects.txt
            <div class="file-size">2.8 kB</div>
        </div>
    </section>
    <section id="info-container">
        <div id="file-logo"></div>
        <h1 id="file-title"></h1>
        <p id="file-description"></p>
        <div id="link-container">
            <a class="button" id="resume" href="/assets/files/nolanmacfarlane.pdf" target="_blank">Resume (PDF)</a>
            <a class="button" id="resume-html" href="nolanmacfarlane.html">Resume (HTML)</a>
            <a class="button" id="github" href="https://github.com/nolanmacfarlane" target="_blank">Github</a>
            <a class="button" id="email" href="mailto:nolanmacfarlane05@gmail.com" target="_blank">Email</a>
            <a class="button" id="github-portfolio" href="https://github.com/nolanmacfarlane/nolanmacfarlane.github.io" target="_blank">Github</a>
            <a class="button" id="github-chess" href="https://github.com/nolanmacfarlane/Chess-Engine" target="_blank">Github</a>
            <a class="button" id="github-hospiflow" href="https://github.com/nolanmacfarlane/ENGR-120-Design-Project-HospiFlow">Github</a>
        </div>
        <div id="extra-div">
            <textarea id="theme-input" class="input" rows="8" cols="60" spellcheck="false" maxlength="500"></textarea>
            <textarea id="ui-input" class="input" rows="8" cols="60" spellcheck="false" maxlength="500"></textarea>
            <textarea id="effect-input" class="input" rows="8" cols="60" spellcheck="false" maxlength="500"></textarea>
            <div id="lichess-game">
                <div id="status">Checking for live games...</div>
                <div id="board-container">
                    <div id="board"></div>
                </div>
            </div>
            <!-- TODO: Add an embed for metroidvania game -->
            <div id="metroidvania-screenshots" class="img-container">
                <img src="/assets/images/metroidvania-level-screenshot.png">
                <img src="/assets/images/metroidvania-forge-menu-screenshot.png">
            </div>
            <div id="hospiflow-images" class="img-container">
                <img src="/assets/images/hospiflow-webpage.png">
                <img src="/assets/images/hospiflow-breadboard.png">
            </div>
        </div>
    </section>
</section>
<div id="footer">
    <div id="file-metadata"></div>
    <div id="credit">Created by Nolan MacFarlane - Inspired by Ranger CLI</div>
    <div id="storage">324 GB free</div>
</div>