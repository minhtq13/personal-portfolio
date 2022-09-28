import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import HTMLlogo from "../assets/img/htmlogo.png";
import CSSlogo from "../assets/img/CSS3_logo_and_wordmark.svg.png";
import JSlogo from "../assets/img/jsLogo.png";
import ReactJSlogo from "../assets/img/React-icon.svg.png";
import Githublogo from "../assets/img/GitHub-Mark.png";
import figmaLogo from "../assets/img/figmaLogo.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficiently use and can apply to work the following skills:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={HTMLlogo}
                    alt="somevalue"
                    style={{ borderRadius: 100 }}
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={CSSlogo} alt="somevalue" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={JSlogo} alt="somevalue" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src={ReactJSlogo}
                    alt="somevalue"
                    style={{ marginBottom: 35 }}
                  />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img
                    src={Githublogo}
                    alt="somevalue"
                    style={{ borderRadius: 100 }}
                  />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img
                    src={figmaLogo}
                    alt="somevalue"
                    style={{ width: 112, height: 167.5 }}
                  />
                  <h5>Figma</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="somevalue" />
    </section>
  );
};
