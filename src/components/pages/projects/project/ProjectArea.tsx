import { Link, useParams } from "react-router-dom";
import project_data from "../../../../data/ProjectData";

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
