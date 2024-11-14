import React,{useState} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import mountPic from '../assets/img/mount.jpg'
import project1 from '../assets/img/proj1.png'
import project2 from '../assets/img/proj2.png'
import project3 from '../assets/img/proj3.png'
import { useNavigate } from 'react-router-dom'

const projects = [
    {
        id: 1,
        title: "FlowSync (Jira Clone) Project",
        description: "Developed Flowsync, a responsive Jira clone designed for efficient task management and collaboration. Implemented features such as customizable workflows, task tracking, and a visually appealing interface. The landing page highlights key features, while the design ensures seamless performance across devices. Integrated both frontend and backend for full-stack functionality, focusing on user experience and streamlined project management.",
        tech: "Next.js, Tailwind CSS, ShadCN UI, JavaScript, GitHub, VS Code",
        githubLink: "https://github.com/KunalG9688/flowsync",
        liveDemo: "https://flowsync-beta.vercel.app",
        image: project1,
      },
      {
        id: 2,
        title: "Employee Management Dashboard",
        description: "Built an Employee Management System with user authentication and real-time updates. Developed separate dashboards for employees and admins, allowing efficient management of employee data, roles, and performance analytics.",
        tech: "React.js, MongoDB, Node.js, Tailwind CSS, GitHub, VS Code",
        githubLink: "https://github.com/KunalG9688/EMS_Frontend",
        liveDemo: "https://ems-frontend-beta.vercel.app",
        image: project2,
      },
      {
        id: 3,
        title: "Forever E-commerce Website",
        description: "Created a comprehensive e-commerce platform, Forever, featuring a landing page, multiple product pages, user authentication, and routing. Utilized React.js with Redux/Context API for state management and Tailwind CSS for responsive design. Integrated a seamless user interface for browsing, purchasing, and managing orders, enhancing the overall user experience.",
        tech: "React.js, Redux/Context API, Tailwind CSS, React Router DOM, GitHub, VS Code",
        githubLink: "https://github.com/KunalG9688/EMS_Frontend",
        liveDemo: "https://ems-frontend-beta.vercel.app",
        image: project3,
      },
      // Add more projects as needed
    ];

const ProjectFull = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Calculate the index of the first and last projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const returnClick = () =>{
    navigate("/");
  }
  return (
    <div>
        <Header />
        <div className='container'>
            <div className='btn-display'>
                <button className='btn-return danger' onClick={returnClick}><i className="bi bi-arrow-left"></i>  Return Back</button>
                <button className='btn-return danger'><i className="bi bi-arrow-left"></i>  Frontend</button>
                <button className='btn-return danger'><i className="bi bi-arrow-left"></i>  Other</button>
            </div>
        </div>
        <div className='containerfull'>
           
      {currentProjects.map((project) => (
        <div className="cardfull" key={project.id}>
          <div className='imgfull-card'>
            <img src={project.image} alt={`${project.title} Image`} className="project-img" />
          </div>
          <div className="cardfull-content">
            <h2 className="projectfull-title">{project.title}</h2>
            <p className="projectfull-description">{project.description}</p>
            <p className="projectfull-tech">
              <strong>Technologies Used:</strong> {project.tech}
            </p>
            <div className="cardfull-links">
              <a href={project.githubLink} className="cardfull-link" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
              <a href={project.liveDemo} className="cardfull-link" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Display page numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
        <Footer />
    </div>
  )
}

export default ProjectFull