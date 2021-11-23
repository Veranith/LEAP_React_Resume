import React from "react";

function ResumeHeader() {
    return (
        <header className="header">
            <img src="https://avatars.githubusercontent.com/u/274507" className="portrait" alt="" />
            <span id="myName"> Ryan Robinson </span>
            <aside className="contact">
                <p><a href="mailto:Ryan.Robinson@Microsoft.com"> Ryan.Robinson@Microsoft.com </a></p>
                <p><a href="https://www.linkedin.com/in/RyRob"> LinkedIn </a></p>
                <p><a href="https://www.github.com/veranith"> GitHub </a></p>
            </aside>
        </header>
    );
}

export default ResumeHeader;