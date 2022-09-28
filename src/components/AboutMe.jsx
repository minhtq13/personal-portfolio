/* eslint-disable react/jsx-no-target-blank */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const AboutMe = () => {
  return (
    <section className="project" id="aboutme">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About me</h2>
                  <p>Ta Quang Minh</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Personal Information
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Interests</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          <div className="dob">
                            <strong>Data of birth:</strong>
                            <h6 className="first-aboutme">Oct 13, 2001</h6>
                          </div>
                          <div className="gender">
                            <strong>Gender:</strong>
                            <h6 className="first-aboutme">Male</h6>
                          </div>
                          <div className="phone">
                            <strong>Phone:</strong>
                            <h6 className="first-aboutme">0979047751</h6>
                          </div>
                          <div className="email">
                            <strong>Email:</strong>
                            <h6 className="first-aboutme">
                              taminh596@gmail.com
                            </h6>
                          </div>
                          <div className="address">
                            <strong>Address:</strong>
                            <h6 className="first-aboutme">Hanoi, Vietnam</h6>
                          </div>
                          <div className="website">
                            <strong>Website:</strong>
                            <h6 className="first-aboutme">
                              <a
                                target="_blank"
                                href="https://github.com/minhtq13"
                              >
                                https://github.com/minhtq13
                              </a>
                            </h6>
                          </div>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="hust">
                          <div className="left-education">Aug 2019 - Now</div>
                          <div className="right-education">
                            <div>
                              <strong>
                                Hanoi University of Science and Technology
                              </strong>
                            </div>
                            <div>
                              <h6>
                                Major: Electronics and Telecommunications
                                Engineering
                              </h6>
                              <h6>CPA: 3.33/4</h6>
                            </div>
                          </div>
                        </div>
                        <div className="relevant-course">
                          <p className="title-course">
                            <strong>Relevant Coursework</strong>
                          </p>
                          <p className="career">
                            <i>
                              Electronics and Telecommunications Engineering
                            </i>
                          </p>
                          <p className="subject-career">
                            Computer Fundamentals, Web Development, Database
                            Management Systems, Object-Oriented Programming,
                            Data Structures And Algorithms, Application Software
                            Engineering
                          </p>
                        </div>
                        <div className="online-course">
                          <p className="title-course">
                            <strong>Online courses and short courses</strong>
                          </p>

                          <p className="subject-career">
                            hackkerRank, freecodecamp, w3school, F8, nodemy,
                            codelearn,...
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="interest">
                          Computing, foreign language,searching, designing,
                          writing,mentoring, researching
                          <br /> Soccer, music, reading book
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
