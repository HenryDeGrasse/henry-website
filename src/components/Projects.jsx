import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
    const containerStyle = {
        width: '1000px',
        margin: '0 auto',
        padding: '20px',
    }

    /*const projectDisplayStyle = (imageUrl) => ({
        border: '1px solid black',
        padding: '20px',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: '300px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black', // Adjust text color for visibility
        textDecoration: 'none' // Remove underline from links
    });
*/

    const projectStyle = {
        border: '1px solid black',
        width: '300px',
        height: '200px',
        position: 'relative',
        textDecoration: 'none'
    };

    const projectImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Translucent black
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.5s'
    };
    const projects = [
        { id: 1, title: "Groundstation PCB", imageUrl: "/groundstationBoard.jpg" },
        { id: 2, title: "Project Two", imageUrl: "/path/to/image2.jpg" },
        { id: 3, title: "Project Three", imageUrl: "/path/to/image3.jpg" }
    ];

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'left' }}>Projects</h2>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} style={projectStyle}>
                        <img src={project.imageUrl} alt={project.title} style={projectImageStyle} />
                        <div style={overlayStyle} className="overlay">
                            <span>{project.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;