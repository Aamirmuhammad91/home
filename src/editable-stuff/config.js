// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Aamir',
  middleName: '',
  lastName: 'Muhammad',
  message: ' Committed to continuous learning and building innovative tech. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/Aamirmuhammad91',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/aamir-muhammad-21b285113/',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/aamir_muhammad_900.png'),
  imageSize: 350,
  message:
    'My name is Aamir Muhammad. I’m a graduate of 2021 from Frankfurt University of Applied Sciences with a degree in Information Technology. I am a full-stack web developer with over 4 years of experience in application development. Currently, I work with the Data Science and Digital Libraries Research Group on the Terminology Service project, where we have developed tools for Ontology Mappings, Semantic Search, and Annotation Services.',
  // resume: 'https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing',
  resume: require('../editable-stuff/Aamir-Curriculum-Vitae.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'Aamirmuhammad91', //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/aamir_muhammad_900.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/aamir_muhammad_900.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'JavaScript', value: 75 },
    { name: 'Python', value: 70 },
    { name: 'React', value: 85 },
    { name: 'Data Structures', value: 85 },
    { name: 'PostgresSQL', value: 70 },
    { name: 'Java', value: 65 },
    { name: 'Ansible', value: 60 },
    { name: 'Docker', value: 80 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for full-time Web Developer or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'aamirmuhammad91@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer', // Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
