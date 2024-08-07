import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Exp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="exp">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>WORK EXPERIENCE</h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h4>Software Developer</h4>
                                <h6>01/2018 - 07/2018,Algeria</h6>
                                <br />
                                <br />
                                <p>-Study the different dimensions of the problem in order to find effective solutions.</p>
                                <p>-Listen to different ideas and opinions while exercising critical thinking.</p>
                                <p>-Establish a clear schedule to ensure tasks are completed on time.</p>
                                
                                
                            </div>
                            <div className="item">
                                
                                <h4>Front-End Developer</h4>
                                <h6>09/2020 - 01/2021,Tiaret</h6>
                                <br />
                                <br />
                                <p>-Design and implement user interface components for JavaScript (web-mobile) applications.</p>
                                <p>-Analyze all customers data in order to offer them better service .</p>
                                <p>-Managed front-end development of client sites.</p>
                                
                                
                            </div>
                            <div className="item">
                                
                                <h4>React Developer</h4>
                                <h6>07/2022 - 11/2022,Tlemcen</h6>
                                <br />
                                <br />
                                <p>-Created client side validation tool using technologies such as ReactJS and NextJs.</p>
                                <p>-Apply my technical knowledge to produce better quality.</p>
                                <p>-Build reusable code and libraries for future use.</p>
                                
                                
                            </div>
                            <div className="item">
                                
                                <h4>Full Stack  Developer</h4>
                                <h6>11/2022 - 03/2023,France</h6>
                                <br />
                                <br />
                                <p>-Developing and designing front end web architecture and building interactive consumer data .</p>
                                <p>-Translating wireframes and PSD Designs into functional web applications.</p>
                                <p>-Build reusable code and libraries for future use.</p>
                                
                            </div>
                            
                            <div className="item">
                                
                                <h4>Software Engineer</h4>
                                <h6>05/2023 - 02/2024,Algeria</h6>
                                <br />
                                <br />
                                <p>-Designing and maintaining software systèmes.</p>
                                <p>-Optimization of current software.</p>
                                <p>-Build reusable code and libraries for future use.</p>
                                
                            </div>
                          
                            
                            <div className="item">
                                
                                <h4>Freelancer NextJs Developer</h4>
                                <h6>03/2024 - Present,KSA</h6>
                                <br />
                                <br />
                                <p>-Designing and maintaining software systèmes.</p>
                                <p>-build server-side-rendered React applications.</p>
                                <p>-creating fast and SEO-friendly web experiences.</p>
                                
                            </div>
                           
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}


