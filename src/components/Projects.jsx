import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {

    const projects = [
        { id: 1, title: "Groundstation PCB", imageUrl: "/groundstationBoard.jpg" },
        { id: 2, title: "Work in Progress", imageUrl: "/path/to/image2.jpg" },
        { id: 3, title: "Coming soon", imageUrl: "/path/to/image3.jpg" }
    ];

    return (
        <div className="container">
            <h2 style={{ textAlign: 'left' }}>Projects</h2>
            <hr />
            <div className="projectLayout">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="project">
                        <img src={project.imageUrl} alt={project.title} className="projectImage" />
                        <div className="overlay">
                            <span>{project.title}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;