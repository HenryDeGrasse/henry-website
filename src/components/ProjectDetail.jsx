import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProjectDetail.css'

const projectDetails = {
    '1': {
        title: "Aerospace Groundstation Embedded Code",
        details:
            "Date: January 2022",
        projectOverview: "Objective: " +
            "Develop embedded software for the CC1120 radio transceiver chip, integrated into a " +
            "ground station PCB. This software enables the PCB to receive data from an antenna, process it, " +
            "and transmit it over a USB connection to a host system. The software also manages GPS data handling " +
            "and switching between receiving and transmitting modes.",
        hardwareComponents: "Hardware Details: " +
            "CC1120 Radio Transceiver: A high-performance, fully integrated RF transceiver designed for narrow-band " +
            "systems. It offers excellent sensitivity and selectivity, making it ideal for long-range communication.",
        softwareComponents: "Software Details: " +
            "Programming Language: The CC1120 is developed in C, chosen for its efficiency and control over hardware " +
            "resources. Radio Data Handling: Code to initialize and configure the CC1120 chip, including setting " +
            "frequency, bandwidth, and power settings. The software must handle the received RF signals, convert them " +
            "into digital data, and filter out noise or irrelevant information.",
        challengesSolutions: "Noise Reduction: Implement advanced signal processing algorithms to enhance the " +
            "signal-to-noise ratio, ensuring clear data transmission. Data Integrity: Incorporate error detection and " +
            "correction mechanisms to ensure the reliability of the transmitted data, especially over long distances.",
        testing: "Testing and Validation: " +
            "Independent Testing: Testing of individual software modules to verify that they function correctly in isolation. " +
            "Integration Testing: Testing the combined operation of the software with the hardware components to validate overall system functionality. " +
            "Field Testing: Deploying the system in a real-world environment to test its performance under various conditions, like different weather scenarios and distances."
    },
    '2': {
        title: "Project Two",
        details: "This is the second project, which is about..."
    },
    // ... more projects
};

function ProjectDetail() {
    let { id } = useParams();
    const project = projectDetails[id];

    return (
        <div className="projectDetailsBackground">
            <div className="backButton">
                <Link to="/">&#x2190;</Link>
            </div>

            <h1>{project ? project.title : "Project not found"}</h1>
            <h2>{project ? project.details : "The details of this project are not available."}</h2>
            <div className="projectText">
                <p>{project.projectOverview}</p>
                <p>{project.hardwareComponents}</p>
                <p>{project.softwareComponents}</p>
                <p>{project.challengesSolutions}</p>
                <p>{project.testing}</p>
            </div>

            {/* Include more project details here */}
        </div>
    );
}

export default ProjectDetail;
