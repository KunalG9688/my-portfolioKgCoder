import React from 'react'
import img1 from '../assets/img/work-11.png'
import img2 from '../assets/img/work-12.png'
import img3 from '../assets/img/work-13.png'
import { Link } from 'react-router-dom';  // Import Link component


const PortfolioPage = () => {
  return (
    <div id="portfolio" className='banner-border'>
        <div className="container">
            <h1 className="sub-title">My Work</h1>
            <div className="work-list">
                <div className="work">
                    <img src={img1} />
                    <div className="layer">
                        <h3>Front-End Project</h3>
                        <p>A front-end project built exclusively with HTML, CSS, and JavaScript, designed to solve practical challenges.</p>
                        <a href="#"><i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="work">
                    <img src={img2}/>
                    <div className="layer">
                        <h3>MERN Project and Full Stack Project</h3>
                        <p>A full-stack MERN project leveraging MongoDB for database management, Express.js for server-side logic, React.js and Next.js for the front-end interface, and Node.js as the runtime environment.</p>
                        <Link to="/project-full"><i className="bi bi-box-arrow-up-right"></i></Link>
                    </div>
                </div>
                <div className="work">
                    <img src={img3}/>
                    <div className="layer">
                        <h3>Programming Languages</h3>
                        <p>A Python and Javascript based project exploring and implementing key Data Structures and Algorithms.</p>
                        <a href="#"><i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
            <a className="btn" href="#">See Nore</a>
        </div>
    </div>
  )
}

export default PortfolioPage