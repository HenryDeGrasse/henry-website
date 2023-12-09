import React from 'react';
import './Welcome.css';

function Welcome() {
    function scrollToAboutMe() {
        const aboutMeElement = document.getElementById('aboutMe');
        if (aboutMeElement) {
            aboutMeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="welcomeWords">
            Welcome to Henry DeGrasse's Digital Portfolio
            <span className="arrow" onClick={scrollToAboutMe}>&#x2193;</span>
        </div>
    );
}

export default Welcome;
