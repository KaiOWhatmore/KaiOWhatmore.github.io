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
  username: "Kai Whatmore",
  title: "Hi all, I'm Kai",
  subTitle: emoji(
    "A passionate Back End Software Developer 🚀 having experience in building Web applications and heavy backend systems.  Always learning, always curious"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1bGhn60LtiUQ0x64zRildRLUPCjCnmR68Nsa9qHfbaWY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KaiOWhatmore",
  linkedin: "https://www.linkedin.com/in/kai-%E2%98%95-whatmore-8273a2206",
  gmail: "oscar1995@live.com.au",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SELF TAUGHT CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Woking in enterprise environments working with complex backend systems"
    ),
    emoji("⚡ Putting my nose to the grindwheel on REST APIs, Back Office backend engineering, DevOps and Developer Tools"),
    emoji(
      "⚡ Self teaching React and FrontEnd development for pet projects and professional aspirations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "maven",
      fontAwesomeClassname: "fas fa-feather"
    },
    {
      skillName: "oracle-plsql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bash/zsh/linux",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sydney University",
      logo: require("./assets/images/usyd.png"),
      subHeader: "Bachelor of Mathematics and Physics",
      duration: "72.7 WAM, September 2014 - November 2020",
      desc: "Applied Mathematics, Quantum Physics, Biological Sciences and Engineering",
      descBullets: [
        "MatLab and Python for projects in Thermodynamics, Materials and Quantum Thought Experiments ",
        "Algorithm Design for Solving Mathematical Theorems",
        "Mathematical Models in Biological Systems",
        "Molecular Biology and Protein Biochemistry",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "80%"
    },
    {
      Stack: "Shell Scripting",
      progressPercentage: "70%"
    },
    {
      Stack: "Agile Methodology",
      progressPercentage: "100%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Software Engineer",
      company: "Worldline",
      companylogo: require("./assets/images/worldline.png"),
      date: "August 2022 – Present",
      desc: "Back Office Java Backend Developer using maven, PL/SQL, shell scripting, linux and Docker",
      descBullets: [
        "Built Docker Starter, a desktop tool for devs, upgrading tech with JavaFX, Docker, WSL, and shell scripting.",
        "Built tools for automating new workspace environments, reducing setup times by half ",
        "Constructed a robust testing framework, enhancing QC in PL/SQL view evaluations",
        "Optimized CI/CD, fortifying build configurations and schema commitments"
      ]
    },
    {
      role: "Backend REST API Developer",
      company: "MediRecords",
      companylogo: require("./assets/images/medirecords.webp"),
      date: "June 2021 – August 2022",
      desc: "Java developer focused in REST-API's, CI/CD DevOps deployments and agile work methodologies",  
      descBullets: [
        "Developed and deployed healthcare REST-APIs using the FHIR-HAPI framework",
        "Steered deployments as release manager, leveraging Jenkins pipelines",
        "Ushered a 30% throughput boost with a strategic FreeMarker script,",
        "Streamlined card/ticket workflows, upscaling API documentation quality"
      ]
    },
    {
      role: "Backend Developer, Data Scientist",
      company: "Break The Chain",
      companylogo: require("./assets/images/break-the-chain.webp"),
      date: "Jan 2020 – June 2020",
      desc: "Worked as a one-person army for data analysis on business finances and built ETL tools for automation",
      descBullets: [
        "Orchestrated comprehensive data management, encompassing extraction, migration, and cleansing for pivotal mental health initiatives", 
        "Conceived and executed an advanced ETL pipeline, leveraging SQL and Python prowess",
        "Deployed Tableau to craft insightful dashboards, shedding light on sales trajectories"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-435-157-530",
  email_address: "oscar1995@live.com.au"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
