

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

export default Header;
