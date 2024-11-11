import React,{useState} from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import mountPic from '../assets/img/mount.jpg'
import { useNavigate } from 'react-router-dom'

const projects = [
    {
        id: 1,
        title: "FlowSync (Jira Clone) Project",
        description: "Fullstack",
        tech: "HTML, CSS, JavaScript, Next.js",
        githubLink: "https://github.com/your-username/project-repo1",
        liveDemo: "https://your-project-deploy-link1.com",
        image: mountPic,
      },
      {
        id: 2,
        title: "Project Title 2",
        description: "Another brief description for a different project.",
        tech: "HTML, CSS, JavaScript, Python, Django",
        githubLink: "https://github.com/your-username/project-repo2",
        liveDemo: "https://your-project-deploy-link2.com",
        image: mountPic,
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