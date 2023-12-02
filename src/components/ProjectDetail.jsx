import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
    let { id } = useParams();

    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <h2>Project Details</h2>
            <p>Details of project {id}.</p>
            {/* Include more project details here */}
        </div>
    );
}

export default ProjectDetail;
