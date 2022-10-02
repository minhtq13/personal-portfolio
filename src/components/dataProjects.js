import projectTheBand from "../assets/img/project-theband.PNG";
import projectReactsBasic from "../assets/img/project-reacts-bacsic.PNG";
import projImg2 from "../assets/img/project-img2.png";
import projectTiktok from "../assets/img/project-tiktok.PNG";
import projectRikkei from "../assets/img/project-infinity-camera.PNG";
import projectManagement from "../assets/img/project-managent.PNG";
import projectReactMovie from "../assets/img/project-react-movie.PNG";
const dataProjects = [
    {
        title: "The Band",
        category: "UI/UX",
        description: (
            <p>
                First Website <br /> Fully Responsive
            </p>
        ),
        imgUrl: projectTheBand,
        linkGithub: "https://github.com/minhtq13/theBandweb",
    },
    {
        title: "Business Startup",
        category: "UI/UX",
        description: <p>Design & Development</p>,
        imgUrl: projImg2,
    },
    {
        title: "15 React Projects",
        category: "UI/UX",
        description: (
            <p>
                15 Basic Projects <br /> By John Smilga
            </p>
        ),
        imgUrl: projectReactsBasic,
        linkGithub: "https://github.com/minhtq13/react-projects",
    },
    {
        title: "Tiktok",
        category: "Web App",
        description: (
            <p>
                Clone Tiktok Web <br /> Use API F8
            </p>
        ),
        imgUrl: projectTiktok,
        linkGithub: "https://github.com/minhtq13/tiktok-ui",
    },
    {
        title: "React Movie App",
        category: "Web App",
        description: (
            <p>
                Responsive React Movies App With API <br /> API themoviedb.org
            </p>
        ),
        imgUrl: projectReactMovie,
        linkGithub: "https://github.com/minhtq13/React-Movie-App",
    },
    {
        title: "Web Project Management",
        category: "Web App",
        description: <p>Design Project at HUST</p>,
        imgUrl: projectManagement,
        linkGithub: "https://github.com/huan2401/project-1-trello-app",
    },
    {
        title: "Infinity Camera",
        category: "Web App",
        description: (
            <p>
                Company Project <br />
                Design & Development
            </p>
        ),
        imgUrl: projectRikkei,
    },
];
export default dataProjects;
