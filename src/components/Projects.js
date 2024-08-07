import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import route from '../assets/img/route.PNG'
import panel from '../assets/img/panel.PNG'
import login from '../assets/img/login.jpg'
import pizza from '../assets/img/pizza.PNG'
import shop from '../assets/img/shop.PNG'
import food from '../assets/img/food.PNG'
import kazadmin from '../assets/img/kazadmin.PNG'
import human from '../assets/img/human.PNG'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dating App",
      description: "Design & Development",
      imgUrl: human,
      
    },
    {
      title: "Management Web App",
      description: "Design & Development",
      imgUrl: kazadmin,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: route,
    },
    {
      title: "Admin Panel",
      description: "Development",
      imgUrl: panel,
    },
    
    
    {
      title: "Food Ordering",
      description: "Design & Development",
      imgUrl: pizza,
    },
    {
      title: "Food Delivery",
      description: "Design & Development",
      imgUrl: food,
    },
    
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                   
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
