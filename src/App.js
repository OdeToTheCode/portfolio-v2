import { useState } from "react"
import { Portfolio, Resume, Contact } from "./pages";
import { Header, Wrapper, Footer } from "./components";
import facepic from "./assets/porfolioPic.jpeg"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeLoginBtn, setActiveLoginBtn] = useState(1)



  const page = window.location.href.includes("3000") ? window.location.href.split("3000/")[1] : window.location.href.split(".com/")[1]

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
