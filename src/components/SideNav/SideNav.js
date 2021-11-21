import React from 'react'; 
import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://www.linkedin.com/in/kasish-agarwal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbDPiOkFrSEC%2FETYQ%2BDQ3XA%3D%3D"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Kasish Agarwal</h2>
            <p className="subtitle">"A Full Stack Developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};
