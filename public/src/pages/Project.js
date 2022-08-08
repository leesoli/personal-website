import { useParams } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export default function Project(props) {
  const { projectId } = useParams();
  const currentProject = props.projects.find(item => item.id === Number(projectId));

  return (
    <main className="project-page">
      <section className="mobile-photos">
        <div className="mobile-photo-container">
          {currentProject.mobilePhotos.map((url, index) => (
            <div className="individual-photo-wrapper">
            <img
              className={`mobile-photo-${index + 1}`}
              src={'/' + url}
              alt={`${index + 1} mobile view`}
            />
            </div>
          ))}
        </div>
      </section>

      <section className="project-description">
        <h3>{currentProject.name}</h3>
        <p className="project-summary">
          {`${currentProject.description} `}
          <a
            href={currentProject.url}
            className="project-link"
          >View My Code < BsArrowRight /></a>
        </p>

        <div className="project-techstack-container">
          {currentProject.techStack.map(tech => {
            return (
              <span>{tech}</span>
            )
          })}
        </div>
      </section>

      <section className="project-photos">
          {currentProject.photos.map((url, index) => {
            return (
              <img
                key={currentProject.id}
                src={'/' + url}
                alt={`${index+ 1} view of ${currentProject.name} interface`}
              />
            )
          })}
      </section>

    </main>

  )
}