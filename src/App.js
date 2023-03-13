import { useState, useEffect } from "react"
import facepic from "./assets/porfolioPic.jpeg"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homerResume from './assets/homerSimposonResume.pdf'
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

library.add(fab);

const Wrapper = ({children}) => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#333",
      padding: "50px"
    }}>
      { children }
    </div>
  )
}

const Header = () => {
  return (
    <header style={{ backgroundColor: "#8B0000", borderBottom: "1px solid #333" }}>
      <nav className="navbar navbar-dark navbar-expand-md" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Resume">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <p className="navbar-brand mb-0">Jacob's Portfolio</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: "#333", 
      color: "#fff", 
      textAlign: "center", 
      padding: "20px" 
    }}>
      <p>&copy; {currentYear}</p>
      <div>
        <a href="https://github.com/OdeToTheCode" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} style={{color: "#fff", margin: "10px"}} /></a>
        <a href="https://www.linkedin.com/in/OdeToTheCode/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{color: "#fff", margin: "10px"}} /></a>
        <a href="https://stackoverflow.com/users/1234567/OdeToTheCode" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'stack-overflow']} style={{color: "#fff", margin: "10px"}} /></a>
      </div>
    </footer>
  );
}


const Contact = () => {
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" })
  const [errorMessage, setErrorMessage] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(true)

  const handleContactForm = (e) => {
    switch (e.target.name) {
      case "name":
        setContactData({ ...contactData, name: e.target.value })
        break;
      case "email":
        const email = e.target.value
        setContactData({ ...contactData, email: email })
        setIsEmailValid(validateEmail(email))
        break;
      case "message":
        setContactData({ ...contactData, message: e.target.value })
        break;
      default:
    }
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contactData.name.trim() === "" || contactData.email.trim() === "" || contactData.message.trim() === "") {
      setErrorMessage("All fields are required.")
      return
    }
    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.")
      return
    }
    // send contact form data to backend
    console.log(contactData)
  }

  return (
    <>
      <h1>Contact Form</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }} className="px-5">

        {/* ============ left side ==========================  */}

        <div style={{ width: "80%" }}>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="John Doe"
                value={contactData.name}
                onChange={handleContactForm}
              />
            </div>

            <div style={{ width: "45%" }} className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="jndoe@example.com"
                value={contactData.email}
                onChange={handleContactForm}
              />
              {!isEmailValid && <div style={{ color: "red" }}>Please enter a valid email address.</div>}
            </div>

            <div style={{ width: "80%" }}>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                placeholder="Your message here..."
                value={contactData.message}
                onChange={handleContactForm}
              />
            </div>

            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

            <div style={{ marginTop: "1rem" }}>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

}

const Resume = () => {

  return (
    <>
      <h1>Resume</h1>
      <p>Not My Actual Resume</p>
      <iframe src={homerResume} style={{ width: '100%', height: '800px' }}></iframe>
    </>
  )
}

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/OdeToTheCode/repos');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .slice(0, 6);
        setRepos(filteredRepos);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchRepos();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row">
        {repos.slice(0, 3).map(repo => (
          <div className="col-4" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                className="repo-img"
                src={`https://raw.githubusercontent.com/OdeToTheCode/${repo.name}/main/preview.png`}
                alt={repo.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
                }}
              />
              <div className="repo-name">{repo.name}</div>
            </a>
          </div>
        ))}
      </div>
      <div className="row">
        {repos.slice(3, 6).map(repo => (
          <div className="col-4" key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <img
                className="repo-img"
                src={`https://raw.githubusercontent.com/OdeToTheCode/${repo.name}/main/preview.png`}
                alt={repo.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png';
                }}
              />
              <div className="repo-name">{repo.name}</div>
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .repo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          position: relative;
        }
        .repo-name {
          text-align: center;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeLoginBtn, setActiveLoginBtn] = useState(1)

  const page = window.location.href.split("3000/")[1]

  return (
    <Wrapper>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} activeLoginBtn={activeLoginBtn} />
      <div style={{ padding: "1rem" }}>
        {page === "" && (
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <img src={facepic} alt="Jacob" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-8">
                <h2 className="mb-4">Hello, I'm Jacob!</h2>
                <p className="lead">I'm a junior developer in training at the University of Minnesota Full Stack Web Development Bootcamp. I'm passionate about creating beautiful and functional websites that make a difference. This is my portfolio website where you can find out more about me and some of the projects I've worked on. Thanks for stopping by!</p>
              </div>
            </div>
          </div>
        )}
        {page === "Portfolio" && <Portfolio />}
        {page === "Resume" && <Resume />}
        {page === "Contact" && <Contact />}
        <Footer />
      </div>
    </Wrapper>
  )
}

export default App;
