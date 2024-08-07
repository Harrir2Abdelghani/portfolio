import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import first from '../assets/img/first.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Typewriter } from 'react-simple-typewriter'
import CV from '../assets/font/cv.pdf'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome,</span>
                <h1>{`I'm Harrir Abdelghani`} </h1>
                <div>
            <h1 style={{ margin:'auto 0',fontWeight:'bold'}}>
              I'm a 
              <span style={{color: 'magenta', fontWeight:'bold', marginLeft:'10px'}}>
                <Typewriter
                loop
                curso
                typeSpeed={70}
                deletSpeed={50}
                delaySpeed={1000}
                
                words={[ 'Software Engineer' , 'Front-End Developer']}
                />
              </span>
            </h1>
        </div>
                  <p> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;Graduate Software Engineer and Front-End Developer with 3 years of experience working with JavaScript, HTML/CSS and ReactJs, to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.</p>
                  {/* <button onClick={() => console.log('connect')} >Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  <a href={CV}  className='btn' type="do" target='_blank' >See CV</a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={first} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
