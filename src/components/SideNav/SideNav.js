import React from 'react'; 
import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQHStYyK-6AV5g/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=gn3I4kEahUXMNs-_SHKO-fjs0FbnWgz_FQLSqyLUHZE"
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