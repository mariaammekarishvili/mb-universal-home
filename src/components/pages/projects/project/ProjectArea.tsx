import { Link, useParams } from "react-router-dom";
import project_data from "../../../../data/ProjectData";
import "./ProjectArea.css";

const imageStyle = {
  display: "block",
  width: "100%",
  height: "auto",
  //   aspectRatio: "1 / 1",
  objectFit: "cover" as const,
};

const ProjectArea = () => {
  const { projectPage } = useParams();
  const project = project_data.find((item) => item.page === projectPage);

  return (
    <section className="project-page-section section-space p-relative fix">
      <div className="small-container">
          {projectPage && (
            <Link
              to="/projects"
              className="project-back-link"
              aria-label="Back to projects"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M19 12H5m7-7-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> Back
            </Link>
          )}
          {project && (
            <h2 className="project-gallery-title">{project.title}</h2>
          )}{" "}
        {projectPage && !project ? (
          <p>
            Project not found. <Link to="/projects">View all projects</Link>
          </p>
        ) : (
          <div className="row g-4">
            {project
              ? project.images.map((image, index) => (
                  <div key={image} className="col-6">
                    <img
                      src={image}
                      alt={`${project.title} — photo ${index + 1}`}
                      style={imageStyle}
                      loading="lazy"
                    />
                  </div>
                ))
              : project_data.map((item) => (
                  <div key={item.id} className="col-6">
                    <Link
                      to={`/projects/${item.page}`}
                      className="project-slider-area p-relative d-block"
                      aria-label={`View ${item.title}`}
                    >
                      <figure className="image m-img mb-0">
                        <img
                          src={item.thumb}
                          alt={item.title}
                          style={imageStyle}
                          loading="lazy"
                        />
                      </figure>
                      <div className="content-area">
                        <div className="title-area">
                          <h6 className="mb-5">{item.sub_title}</h6>
                          <h5>{item.title}</h5>
                        </div>
                        <div className="icon-area">
                          <i className="icon-arrow-up"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectArea;
