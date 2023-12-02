import React from 'react';

function Welcome() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This makes the component take the full height of the viewport
        fontSize: '2em', // Adjust the font size as needed
        textAlign: 'center',
        fontWeight: 'bold'
    };

    return (
        <div style={style}>
            Welcome to Henry DeGrasse's Digital Portfolio
        </div>
    );
}

export default Welcome;
