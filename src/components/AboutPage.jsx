import React, { useState } from 'react';
import AboutImg from '../assets/img/About-img.jpg';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState('skills'); // Default active tab

    const opentab = (tabname) => {
        setActiveTab(tabname); // Update active tab
    };

    return (
        <div id="about" className='banner-border'> 
            <div className="container">
                <div className="row">
                    <div className="about-col-1 about-img">
                        <img src={AboutImg} alt="About Me" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title about-title">About Me</h1>
                        <p>I am a lifetime learner and keen observer with a passion for building and visualizing web applications. Skilled in the MERN stack—HTML, CSS, JavaScript, React.js, MongoDB, Express, and Node.js—as well as Python for backend scripting. I also have experience in SQL, Power BI, and Excel for data manipulation and analysis, bringing a well-rounded approach to both frontend and backend development.</p>
                        
                        <div className="tab-titles">
                            <p 
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                                onClick={() => opentab('skills')} // Corrected to onClick
                            >
                                Skills
                            </p>
                            <p 
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => opentab('education')} // Corrected to onClick
                            >
                                Education
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>Frontend</span><br/>Designing Web/App interfaces</li>
                                <li><span>Web Development</span><br/>Web/App interfaces</li>
                                <li><span>Full Stack Developer</span><br/>React.js and Next.js</li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2021</span><br/>East West Institute of Technology</li>
                                <li><span>Major:</span><br/>Bachelor of Engineering</li>
                                <li><span>Specialized In:</span><br/>Electronic and Communication</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
