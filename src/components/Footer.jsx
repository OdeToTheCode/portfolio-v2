import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: "#333", 
      color: "#fff", 
      textAlign: "center", 
      padding: "20px" 
    }}>
      <p>&copy; {currentYear} {props.name}</p>
      <div>
        <a href="https://github.com/OdeToTheCode" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} style={{color: "#fff", margin: "10px"}} /></a>
        <a href="https://www.linkedin.com/in/OdeToTheCode/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{color: "#fff", margin: "10px"}} /></a>
        <a href="https://stackoverflow.com/users/1234567/OdeToTheCode" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'stack-overflow']} style={{color: "#fff", margin: "10px"}} /></a>
      </div>
    </footer>
  );
}

export default Footer;
