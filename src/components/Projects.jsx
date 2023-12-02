import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    const projectIds = [1, 2, 3]; // Example project IDs

    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <h2>Projects</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {projectIds.map((id) => (
                    <Link to={`/project/${id}`} key={id} style={{ border: '1px solid black', padding: '20px' }}>
                        Project {id}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
