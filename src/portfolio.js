/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nicole",
  title: "Hi, I'm Nicole",
  picture: require("./assets/images/me.png"),

  // subTitle: emoji(
  //   "Passionate and results-driven Front-End Software Engineer with strong foundations in both front-end and back-end development. Committed to building scalable, user-centric applications and continuously learning emerging technologies to advance towards a Full-Stack Developer role. Eager to contribute to dynamic teams driving innovation and digital transformation."
  // ),
  subTitle: emoji(
    "I'm a Front-End Software Engineer with a passion for clean design, efficient code, and continuous learning. I enjoy building intuitive digital experiences and working on meaningful projects. I'm currently expanding my skill set to grow into a more well-rounded full-stack developer capable of contributing across the entire development process."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NicoleBaltazar",
  linkedin: "www.linkedin.com/in/nicole-baltazar-0abb472a9",
  gmail: "nicole.baltazar2000@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/nicolebaltazar2000",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I know",
  subTitle: "FRONT-END FOCUSED. BACK-END CURIOUS. ALWAYS BUILDING",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Experienced in managing deployments to Test and UAT environments"
    ),
    emoji(
      "⚡ Skilled in REST API integration and third-party service communication"
    ),
    emoji(
      "⚡ Familiar with web scraping methodologies using Selenium and BeautifulSoup"
    )
    //  emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "Vue",
    //   fontAwesomeClassname: "fab fa-vuejs"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "Git hub",
    //   fontAwesomeClassname: "fab fa-github-square	"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "Django",
    //   fontAwesomeClassname: ""
    // }
    // {
    //   skillName: "Tailwind",
    //   fontAwesomeClassname: ""
    // }
    {skillName: "HTML5", iconifyIcon: "fa-brands:html5"},
    {skillName: "CSS3", iconifyIcon: "fa-brands:css3-alt"},
    {skillName: "JavaScript", iconifyIcon: "famicons:logo-javascript"},
    {skillName: "Vue", iconifyIcon: "fa-brands:vuejs"},
    {skillName: "Tailwind", iconifyIcon: "simple-icons:tailwindcss"},
    // {skillName: "React", iconifyIcon: "fa-brands:react"},

    {skillName: "Node.js", iconifyIcon: "fa-brands:node-js"},
    // {skillName: "NPM", iconifyIcon: "fa-brands:npm"},
    // {skillName: "Python", iconifyIcon: "fa-brands:python"},
    {skillName: "Django", iconifyIcon: "simple-icons:django"},
    {skillName: "Laravel", iconifyIcon: "fa-brands:laravel"},
    {skillName: "MongoDB", iconifyIcon: "simple-icons:mongodb"},
    {skillName: "Swagger", iconifyIcon: "simple-icons:swagger"},
    // {skillName: "Postman", iconifyIcon: "simple-icons:postman"},
    {skillName: "Selenium", iconifyIcon: "simple-icons:selenium"},
    // {skillName: "BeautifulSoup", iconifyIcon: "simple-icons:postman"},

    {skillName: "GitHub", iconifyIcon: "fa-brands:github"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technological Institute of the Philippines - Manila",
      logo: require("./assets/images/tipLogo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "August 2020 - September 2024",
      desc: "Magna Cum Laude",
      descBullets: [
        "Top Finalists (Necessipick Group), BPI-DOST Innovation Awards",
        "Presenter, 8th International Conference on Inventive Communication and Computational Technologies (ICICCT) from Springer Professional 2024"
      ]
    },
    {
      schoolName: "Siena College of Quezon City",
      logo: require("./assets/images/sienaLogo.webp"),
      subHeader: "Science, Technology, Engineering, and Mathematics",
      duration: "July 2018 - May 2020",
      desc: "With Honors",
      descBullets: ["Member of the Educator's club"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Deployment / DevOps Basics",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front End Software Engineer",
      company: "Simplevia Technologies",
      companylogo: require("./assets/images/simpleviaLogo.jpg"),
      date: "June 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed and optimized web interfaces using Vue.js, Tailwind CSS, and JavaScript for Web systems.",
        "Collaborated closely with back-end developers for seamless API integrations.",
        "Implemented UI testing and deployed updates in UAT environments.",
        "Debugged and resolved UI issues, ensuring cross-browser compatibility and responsiveness."
      ]
    },
    {
      role: "Front End Developer Intern",
      company: "Simplevia Technologies",
      companylogo: require("./assets/images/simpleviaLogo.jpg"),
      date: "February 2024 – May 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Built reusable UI components and layouts using Vue.js and Bootstrap",
        "Gained hands-on experience with Git-based version control and collaborative coding."
      ]
    },
    {
      role: "Private Tutor",
      company: "Tamayo Residences",
      companylogo: require("./assets/images/tutorLogo.png"),
      date: "November 2020 - May 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Provided one-on-one tutoring in Mathematics, Science, and TLE for a high school student, utilizing customized learning materials."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "HIGHLIGHTS FROM MY JOURNEY AS A DEVELOPER",
  projects: [
    {
      projectName: "BIR ARMS",
      projectDesc:
        "Contributed to building the user interface using Vue.js. Oversaw pull request management for the front-end team and coordinated deployments to both the test and UAT environments.",
      type: "Website",
      role: "Front End Developer",
      languages: "Vue.js, Tailwind, JavaScript",
      projectFullDesc:
        "The BIR e-ARMS (Enhanced Accounts Receivable Management System) is a web-based platform developed for the Bureau of Internal Revenue (BIR) to streamline and digitize the tracking, management, and reporting of government receivables. Designed to replace legacy manual processes, the system provides real-time visibility and control over accounts receivable transactions across various BIR regional offices and departments",
      roleDesc:
        "As one of the front end team, I was responsible for developing and maintaining parts of the user interface using Vue.js and Tailwind CSS, and worked on translating Figma designs into reusable, responsive components. I integrated various APIs to ensure seamless data flow between the front end and back end, and I managed pull requests to maintain code quality across the front-end team. Additionally, I coordinated deployments to the test and UAT environments, working closely with back-end developers and QA engineers to support smooth and timely releases.",
      image: require("./assets/images/armsLogo2.png"),
      liveUrl: "Restricted access (internal use only)",

      carouselImages: [
        require("./assets/images/bir-1.png"),
        require("./assets/images/bir-2.png"),
        require("./assets/images/bir-3.png"),
        require("./assets/images/bir-4.png")
      ],

      footerLink: [
        {
          name: "More Details"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Makaturismo",
      projectDesc:
        "Contributed to building the front-end interface using Vue.js, Pinia, and Tailwind CSS. Handled debugging and issue resolution to ensure a smooth and responsive user experience.",
      type: "Website",
      role: "Front End Developer",
      languages: "Vuejs, Tailwind, JavaScript",
      projectFullDesc:
        "Makaturismo is a tourism-oriented website designed to showcase the cultural, historical, and natural attractions of the municipality in the Philippines. The platform serves as a centralized portal for both locals and tourists to explore upcoming events, discover must-visit destinations, and learn about local heritage.",
      roleDesc:
        "As a front-end developer for the Makaturismo website, I was responsible for building parts of the user interface using Vue.js, Pinia for state management, and Tailwind CSS for styling. Additionally, I handled debugging and issue resolution throughout development, addressing visual or functional issues that arose during testing.",
      image: require("./assets/images/makaturismoLogo.jpg"),
      liveUrl: "https://www.makaturismo.ph//",
      carouselImages: [
        require("./assets/images/makaturismo-0.png"),
        require("./assets/images/makaturismo-1.png"),
        require("./assets/images/makaturismo-2.png"),
        require("./assets/images/makaturismo-3.png"),
        require("./assets/images/makaturismo-4.png"),
        require("./assets/images/makaturismo-5.png"),
        require("./assets/images/makaturismo-6.png"),
        require("./assets/images/makaturismo-7.png"),
        require("./assets/images/makaturismo-8.png"),
        require("./assets/images/makaturismo-9.png")
      ],
      footerLink: [
        {
          name: "More Details",
          url: "https://www.makaturismo.ph//"
        },
        {
          name: "Visit Website",
          url: "https://www.makaturismo.ph//"
        }
      ]
    },
    {
      projectName: "Love Laguna",
      projectDesc:
        "Worked with the FE team to build the user interface using Vue.js, Pinia, and Tailwind CSS. Contributed to resolving UI issues and ensuring an engaging and functional experience for site visitors.",
      type: "Website",
      role: "Front End Developer",
      languages: "Vuejs, Tailwind, JavaScript",
      projectFullDesc:
        "The Love Laguna Web Portal is a tourism-focused website designed to showcase the cultural heritage, natural attractions, and local businesses of the Laguna province. Aimed at both local and international tourists, the platform serves as a digital gateway to promote travel, events, and community highlights within the region. The site offers curated destination guides, interactive maps, and multimedia content to enhance the visitor experience and encourage tourism development.",
      roleDesc:
        "As part of the front-end development team, I was responsible for building parts of the user interface of the Love Laguna website using Vue.js, Pinia, and Tailwind CSS. I translated design mockups into responsive, interactive components that reflect the visual identity of the brand. I also contributed to resolving UI bugs, optimizing performance, and ensuring accessibility across devices",
      // liveUrl: "https://www.makaturismo.ph//",
      image: require("./assets/images/loveLagunaLogo.png"),

      carouselImages: [
        require("./assets/images/laguna-1.png"),
        require("./assets/images/laguna-2.png"),
        require("./assets/images/laguna-3.png"),
        require("./assets/images/laguna-4.png"),
        require("./assets/images/laguna-5.png"),
        require("./assets/images/laguna-6.png"),
        require("./assets/images/laguna-7.png"),
        require("./assets/images/laguna-8.png")
      ],
      footerLink: [
        {
          name: "More Details"
          // url: "http://nextu.se/"
        }
      ]
    },
    {
      projectName: "NecessiPick",
      projectDesc:
        "One of the members who handled both front-end and back-end development using Django and MongoDB. Created the product comparison modal and built UI pages for each supermarket.",
      type: "Website",
      role: "Front End Developer, Back End Developer",
      languages: "Django, Bootstrap, MongoDB, Selenium, BeautifulSoup",
      projectFullDesc:
        "Necessipick is a web-based product comparison platform designed to help consumers make smarter grocery shopping decisions. By aggregating and displaying product data from multiple supermarkets (Walter Mart, Shopemetro, Puregold), the system enables consumers to compare item prices and availability across different supermarket, empowering them to choose the most cost-effective option. <br /> In addition to comparing individual products through the comparison modal, users can add items to a shopping list. From there, the system allows consumers to select which products they prefer to buy from specific supermarkets, and provides smart suggestions at the bottom of the list—highlighting whether they can save more by shopping at the nearest branch or at a supermarket offering the best overall deals for their list.<br /><br /> Built as a capstone project, the web application showcases other features such as product search, geolocation map, price history, and similar products.",
      roleDesc:
        "As a full-stack developer on the Necessipick project, I was one of the responsible for both front-end and back-end development using Django and MongoDB. I developed the interactive product comparison modal, which allows users to closely examine and compare prices of the same product across three different supermarkets. Additionally, I helped build the user interface for the supermarkets' page",
      liveUrl: "https://necessipick.onrender.com/",
      image: require("./assets/images/np_profile.png"),

      carouselImages: [
        require("./assets/images/npick-1.png"),
        require("./assets/images/npick-2.png"),
        require("./assets/images/npick-3.png"),
        require("./assets/images/npick-4.png"),
        require("./assets/images/npick-5.png"),
        require("./assets/images/npick-6.png"),
        require("./assets/images/npick-7.png"),
        require("./assets/images/npick-8.png"),
        require("./assets/images/npick-9.png"),
        require("./assets/images/npick-10.png"),
        require("./assets/images/npick-11.png"),
        require("./assets/images/npick-12.png")
      ],
      footerLink: [
        {
          name: "More Details"
          // url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "BPI-DOST Innovation Awards",
      subtitle:
        "Top Finalists (Necessipick Group) in the BPI-DOST Innovation Awards",
      image: require("./assets/images/bpi-dost-2.jpg"),
      imageAlt: "BPI-DOST Innovation Awards",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Announcement",
          url: "https://www.facebook.com/photo?fbid=497735555967347&set=pcb.497741139300122"
        },
        {
          name: "Video Entry",
          url: "https://www.facebook.com/reel/544254571843929"
        }
      ]
    },
    {
      title:
        "8th Inventive Communication and Computational Technologies (ICICCT)",
      subtitle:
        " Presenter at the 8th International Conference on Inventive Communication and Computational Technologies (ICICCT) from Springer Professional 2024",
      image: require("./assets/images/icicct.jpg"),
      imageAlt:
        "Inventive Communication and Computational Technologies (ICICCT) Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bc6D4SvgEaBSMrotkhfuSnZ9b9im4xJp/view?usp=sharing"
        }
      ]
    },

    {
      title:
        "8th Inventive Communication and Computational Technologies (ICICCT)",
      subtitle:
        "Publication of the eBook: \n\n“NecessiPick: Data Extraction and AI Data Refinement in Food Retail Comparison” in Springer Nature 2024",
      image: require("./assets/images/icicct.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "View eBook",
          url: "https://link.springer.com/chapter/10.1007/978-981-97-7710-5_51"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 9350392658",
  email_address: "nicole.baltazar2000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
