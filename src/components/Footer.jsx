/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import gitHubIcon from "../assets/img/GitHub-Mark.png";
import FBIcon from "../assets/img/nav-icon2.svg";
import IGIcon from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a
                                target="_blank"
                                href="https://github.com/minhtq13"
                            >
                                <img src={gitHubIcon} alt="Icon" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/quanggminhhta/"
                            >
                                <img src={FBIcon} alt="Icon" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/qu4ngm1nhh/"
                            >
                                <img src={IGIcon} alt="Icon" />
                            </a>
                        </div>
                        <p>Q. M Ta - My Portfolio</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
