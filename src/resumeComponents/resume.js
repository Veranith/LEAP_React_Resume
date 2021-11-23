import React from "react";
import "../style.css"
import ResumeHeader from './resumeHeader'
import Summary from "./summary";
import Education from "./education";
import Experience from "./experience";

function Resume() {
    return (
        <div className="wrapper">
            <ResumeHeader />
            <Summary />
            <Education />
            <Experience />
        </div>
    );
}

export default Resume;