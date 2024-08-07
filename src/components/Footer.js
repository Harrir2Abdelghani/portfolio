import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harrir-abdelghani-90741a230/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100009454786442" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/g.h.a.n.o/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made With ❤️ in DZ</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
