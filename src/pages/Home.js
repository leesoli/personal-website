
import { Link } from 'react-router-dom';

export default function Home (props) {

  return (
    <main className="home-page">
      <div className="portfolio-container">
        {props.projects.map(item => (
          <div
            className="portfolio-item-container"
            key={item.id}
            onClick={props.turnOnBackground}
          >
          <Link to={`/project/${item.id}`}>
              <div
                className={`portfolio-item portfolio-item-${item.id}`}
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              >
                {item.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}