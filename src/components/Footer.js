import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />
        <Container>
          <a target="__blank" href="https://www.linkedin.com/in/jairo-varela/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="__blank" href="https://github.com/vairojarela">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a target="__blank" href="https://instagram.com/vairojarela">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
