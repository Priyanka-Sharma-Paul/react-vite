import DigitalClock from "../images/clock.png";
import StickyNotes from "../images/sticky-notes.png";
import PortfolioImg from "../images/portfolio.png";
import Pokemon from "../images/pokemon.png"

export const Bio = {
  name: "Priyanka Sharma Paul",
  roles: [
    "Full Stack Developer",
    "Programmer",
  ],
  description:
    "I am an enthusiastic and flexible individual, constantly seeking new challenges. My passion for learning fuels my dedication to producing high-quality outcomes. With an optimistic approach and a focus on personal growth, I am prepared to contribute meaningfully and achieve remarkable success.",
  github: "https://github.com/Priyanka-Sharma-Paul",
  resume: "https://priyanka-sharma-paul.github.io/Geekster-Html/HTML-Classwork-1/",
  linkedin: "https://www.linkedin.com/in/priyanka-sharma-paul-877300227/",
  leetcode: "https://leetcode.com/u/psharmapaul/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://www.geekster.in/favicon.svg",
    role: "Student",
    company: "Geekster",
    date: "Jan 2024 - Present",
    desc: "Currently studying Full Stack Development at Geekster, focusing on Java, HTML, CSS, JavaScript, React, Node.js, and Data Structures and Algorithms (DSA). Gaining hands-on experience in creating dynamic web applications and efficient back-end systems, preparing for a successful career in software development.",
    skills: [
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Data Structures and Algorithms",
      "Git",
      "Responsive Design"
    ],
    certImg: false,
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/png;base64,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",
    school: "Vidyasagar College for Women",
    date: "Jul 2015 - Jul 2020",
    grade: "59%",
    desc: "I pursued a Bachelor's degree in Botany at Vidyasagar College for Women",
    degree: "B.Sc(Botany Honours)",
  },
  {
    id: 1,
    img: "https://wbchseapp.wb.gov.in/portal/frontend/image/logo.png",
    school: "Chanchal Siddheswari Institution (H.S)",
    date: "Jun 2013 - Jun 2015",
    grade: "59%",
    desc: "I completed my Higher Secondery education from Chanchal Siddheswari Institution (H.S)",
    degree: "Higher Secondery",
  },
  {
    id: 2,
    img: "https://wbbse.wb.gov.in/img/logo.png",
    school: "R D Girls High School",
    date: "Jun 2011 - Apr 2013",
    grade: "72%",
    desc: "I completed my secondery education from R D Girls High School",
    degree: "Secondery",
  },
];

export const projects = [
  {
    id: 0,
    title: "Digital Clock",
    date: "Aug 2024",
    description:
      "The aim was to create a digital clock project that displays the real-time to you.",
    image: DigitalClock,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/Priyanka-Sharma-Paul/GEEKSTER-JS/tree/master/digital-clock",
    webapp: "https://priyanka-sharma-paul.github.io/GEEKSTER-JS/digital-clock/",
  },
  {
    id: 1,
    title: "Sticky Notes",
    date: "Aug 2024",
    description:
      "Created a sticky notes application where the user can create a note or delete a note",
    image: StickyNotes,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/Priyanka-Sharma-Paul/GEEKSTER-JS/tree/master/sticky-notes",
    webapp: "https://priyanka-sharma-paul.github.io/GEEKSTER-JS/sticky-notes/",
  },
  {
    id: 4,
    title: "Pokemon",
    date: "Aug 2024",
    description:
      "Developed \"GeeksterPok,\" a Pokémon listing project featuring type-based filtering and reset functionality for enhanced user experience.",
    image: Pokemon,
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/Priyanka-Sharma-Paul/GEEKSTER-JS/tree/master/geekster-pok",
    webapp: "https://priyanka-sharma-paul.github.io/GEEKSTER-JS/geekster-pok/",
  },
  {
    id: 3,
    title: "Porfolio Website",
    date: "Sep 2024",
    description: "Created this personal porfolio website using React",
    image: PortfolioImg,
    tags: ["React", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/Priyanka-Sharma-Paul/mct-5/tree/master/portfolio",
    webapp: "https://mct-5-priyanka-protfolio.vercel.app/",
  },
];
