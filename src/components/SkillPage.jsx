import React from 'react'

const SkillPage = () => {
  return (
    <div id="services" className='banner-border'>
        <div className="container">
            <h1 className="sub-title">My Skills</h1>
            <div className="services-list">
                <div>
                    <i className="bi bi-window-fullscreen"></i>
                    <h2>Front-end</h2>
                    <p>HTML, CSS, and JavaScript </p>
                    <p>React Framework React.js </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="bi bi-backpack4"></i>
                    <h2>Back-end</h2>
                    <p>Node.js, Express</p>
                    <p>Database: MongoDB, SQL Server</p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="bi bi-gear"></i>
                    <h2>Programming Languages</h2>
                    <p>Python, Javascript</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillPage