import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import logo1 from "../assets/img/_PAN6890.jpg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <span className="tagline">
                                        Welcome to my Portfolio
                                    </span>
                                    <h1>
                                        {`Hi! I'm Ta Quang Minh`}{" "}
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        As a person with good logical thinking
                                        and creativity, I hope to become your
                                        Web Developer intern at the company. At
                                        once, I want to improve my professional
                                        skills in the subject and professional
                                        competence through the working
                                        environment of corporate
                                        professionalism. Proficient in the job
                                        in time longest 3 months and become an
                                        official member of the company.
                                    </p>
                                    <button
                                        onClick={() => console.log("connect")}
                                    >
                                        Let's Connect
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img
                                        src={headerImg}
                                        alt="Header Img"
                                        style={{ width: 400, height: 600 }}
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
