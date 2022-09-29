/* eslint-disable react/jsx-no-target-blank */
import { faEye, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  linkGithub,
  linkPreview,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-project">
            <a target="_blank" href={linkGithub} className="button-left">
              <FontAwesomeIcon
                icon={faLink}
                style={{ height: "24px", width: "24px" }}
              />
            </a>
            <a target="_blank" href={linkPreview} className="button-right">
              <FontAwesomeIcon
                icon={faEye}
                style={{ height: "24px", width: "24px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
