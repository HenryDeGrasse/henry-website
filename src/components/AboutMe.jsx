import React from 'react';
import './AboutMe.css';

function AboutMe() {

    return (
        <div id="aboutMe" className="containerImgText">
            <img
                src="/henry-headshot.JPG" // Replace with your image path
                alt="Henry DeGrasse's Headshot"
                className="imageStyle"
            />
            <div className="containerText">
                <h1>About Me</h1>
                <p>
                    Hello! I'm Henry DeGrasse, currently working a Software Engineering Co-op at Chewy. I am also a
                    student at Northeastern University, majoring in Computer Science and Computer Engineering with a
                    minor in Mathematics.
                </p>
                <p>
                    My area of expertise lies in Software Engineering and Development, but I am fascinated by the
                    relationship between mathematics and it's application to our daily lives, especially in Economics.
                </p>
                <p>
                    Outside of coding and algorithms, you can find me engaging in my set of hobbies. Whether it's
                    lacing up for a run, pen-to-paper doodling, training in MMA, or immersing myself in a good book,
                    these activities are my way of staying and feeling healthy and balanced.
                </p>
                <p>
                    My goal is to improve my life and the lives of those
                    around me. I believe that by doing so, I will consequently, uplift and
                    create positive impacts on the world. Whether I'm part of a team, company, or alone, seeing
                    progress is how I obtain satisfaction.
                </p>
                <p>Feel free to connect with me on&nbsp;
                    <a href="https://www.linkedin.com/in/henrydegrasse" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
                    check out my projects code on&nbsp;
                    <a href="https://github.com/HenryDeGrasse" target="_blank" rel="noopener noreferrer">GitHub</a>,
                    or send me an&nbsp;
                    <a href="mailto:degrasse.h@northeastern.edu">email</a>.
                    I’m always open to discussing technology, mathematics,
                    or the latest in the world of MMA and running!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;