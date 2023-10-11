import project_1 from "../images/project/one-shop.png";
import project_2 from "../images/project/auction.png";
import project_3 from "../images/project/rainyday.png";
import project_4 from "../images/project/science.png";
import project_5 from "../images/project/portfolio_website.png";
import css from "../images/icons/css.png";
import Javascript from "../images/icons/logos_javascript.png";
import html5 from "../images/icons/html.png";
import react from "../images/icons/skill-icons_react-dark.png";
import bootstrap from "../images/icons/bootstrap.png";
import tailwind from "../images/icons/tailwindcss.png";
import figma from "../images/icons/figma.png";
import sass from "../images/icons/sass.png";
import netlifyIcon from "../images/icons/netlify.png";
import githubIcon from "../images/icons/github.png";

const projectData = [
  {
    id: 0,
    title: "Portfolio",
    image: project_5,
    tags: [
      {
        id: 0,
        icon: react,
      },
      {
        id: 1,
        icon: tailwind,
      },
      {
        id: 2,
        icon: figma,
      },
    ],
    description:
      "Introducing my portfolio! I'm Rohit, a front-end developer skilled in Create React App and Tailwind CSS. With a beautiful and user-friendly design, I showcase simplicity and ease of understanding. Explore my work and let's connect for exciting collaborations!",

    linkProject: [
      {
        id: 0,
        url: "https://rk-amdahl-portfolio.netlify.app/",
        website: netlifyIcon,
        altText_1: "link to website ",
      },
      {
        id: 1,
        github: "https://github.com/RohitAmdahl",
        githubLinkIcon: githubIcon,
        altText: "link to github ",
      },
    ],
  },

  {
    id: 1,
    title: "E-commerce, One Shop",
    image: project_1,
    tags: [
      {
        id: 0,
        icon: react,
      },
      {
        id: 1,
        icon: tailwind,
      },
      {
        id: 2,
        icon: figma,
      },
    ],
    description:
      "Upon finishing a React course, I tackled an e-commerce project. I chose Tailwind CSS for its flexibility. With its utility classes and components, I swiftly created a captivating, responsive platform. I focused on key features like a shopping cart and detailed product pages, ensuring smooth navigation and efficient cart functionality. This project highlighted my skills in building modern, user-centric web applications by combining React's power with Tailwind CSS.",

    linkProject: [
      {
        id: 0,
        url: "https://creative-zuccutto-14498e.netlify.app",
        website: netlifyIcon,
        altText_1: "link to website ",
      },
      {
        id: 1,
        github: "https://github.com/RohitAmdahl/one-shop-onlineshop-ca",
        githubLinkIcon: githubIcon,
        altText: "link to github ",
      },
    ],
  },

  {
    id: 2,
    title: "Auction",
    image: project_2,
    tags: [
      {
        id: 0,
        icon: html5,
      },
      {
        id: 1,
        icon: figma,
      },
      {
        id: 2,
        icon: Javascript,
      },
      {
        id: 3,
        icon: sass,
      },
      {
        id: 4,
        icon: bootstrap,
      },
    ],
    description:
      "Implemented a fully responsive website using Noroff Auction API documentation.Developed functionalities including user login, sign up, and CRUD operations Registered users have the ability to bid on items, while non-registered users are restricted from bidding. Implemented search functionality by title, enabling users to find specific items, for example",

    linkProject: [
      {
        id: 0,
        url: "https://monumental-tulumba-33a98f.netlify.app",
        website: netlifyIcon,
        altText_1: "link to website ",
      },
      {
        id: 1,
        github: "https://github.com/RohitAmdahl/semster-project-2-",
        githubLinkIcon: githubIcon,
        altText: "link to github ",
      },
    ],
  },

  {
    id: 3,
    title: "rainyday",
    image: project_3,
    tags: [
      {
        id: 0,
        icon: html5,
      },
      {
        id: 1,
        icon: css,
      },
      {
        id: 2,
        icon: figma,
      },
      {
        id: 3,
        icon: Javascript,
      },
    ],
    description:
      "I gathered design inspiration from pictures, created an inspiration board, and developed personas. I installed Hotjar for insights, designed layouts and wireframes, progressing from low to high fidelity and prototypes. I implemented the designs into WordPress, set up products, made API calls, and conducted usability tests for a better user experience. Ensured responsiveness for the website.",

    linkProject: [
      {
        id: 0,
        url: "https://my-frist-website-rainyday.netlify.app",
        website: netlifyIcon,
        altText_1: "link to website ",
      },
      {
        id: 1,
        github:
          "https://github.com/RohitAmdahl/cross-course-project-RohitAmdahl",
        githubLinkIcon: githubIcon,
        altText: "link to github ",
      },
    ],
  },

  {
    id: 4,
    title: "community science museum",
    image: project_4,
    tags: [
      {
        id: 0,
        icon: html5,
      },
      {
        id: 1,
        icon: css,
      },
      {
        id: 2,
        icon: figma,
      },
    ],
    description:
      "Welcome to the Community Science Museum, where science is made accessible to everyone! We believe that science should transcend the confines of textbooks and be experienced firsthand through engaging exhibits. With over 1000 diverse exhibits, we offer a multitude of subjects to explore. Our exhibits are designed to encourage interaction, allowing you to immerse yourself in the wonders of science. From hands-on experiments to captivating displays, you can witness science come alive before your eyes. (Just a friendly reminder: while our dinosaur exhibits remain stationary during the day, they mysteriously come to life at night when the visitors have left.) Join us at the Community Science Museum, where we are passionately dedicated to making the wonders of science accessible to all.",

    learning:
      "Learning HTML and CSS through practical application has been a highly valuable experience. By actively working on projects, I've gained a comprehensive understanding of how these languages function and interact. Through hands-on experimentation, I've grasped the intricacies of HTML's structural elements and the transformative power of CSS in styling and enhancing web content. This practical approach has been instrumental in solidifying my knowledge and skills, allowing me to comprehend the inner workings of these essential web technologies.",

    linkProject: [
      {
        id: 0,
        url: "https://science-meseum.netlify.app",
        website: netlifyIcon,
        altText_1: "link to website ",
      },
      {
        id: 1,
        github:
          "https://github.com/RohitAmdahl/Community-Science-Museum-Website",
        githubLinkIcon: githubIcon,
        altText: "link to github ",
      },
    ],
  },
];

export default projectData;
