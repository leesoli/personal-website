import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Header(props) {
  window.addEventListener("resize", checkWindowSize);

  function setUnderline(page) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.nav-${page}`).classList.add('active');
  }

  function handleClick() {
    document.body.classList.toggle('nav-open');
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
  }

  function enablelargeScreen() {
    document.body.classList.add('large-screen');
  }

  function disablelargeScreen() {
    document.body.classList.remove('large-screen');
  }

  function checkWindowSize() {
    if (window.innerWidth >= 850) {
      closeNav();
      enablelargeScreen();
    } else {
      disablelargeScreen();
    }
  }

  return (
    <header>
      <div className="logo" onClick={props.turnOffBackground}><Link to="/">Soli Anna Lee</Link></div>
      <button className="nav-toggle" onClick={() => {
        props.turnOffBackground();
        handleClick()
      }}>
        <span className="nav-icon"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-home active"
          onClick={() => {
            closeNav();
            setUnderline("home");
            props.turnOffBackground();
          }}><Link to="/">Work</Link></li>

          <li className="nav-about"
          onClick={() => {
            closeNav();
            setUnderline("about");
            props.turnOffBackground();
            }}><Link to="/about">About</Link></li>

        </ul>
        <IconContext.Provider value={{className: "connect-icons"}}>
          <a href="https://github.com/leesoli">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/solilee/">
            <BsLinkedin />
          </a>
        </IconContext.Provider>
      </nav>
    </header>
  )
}