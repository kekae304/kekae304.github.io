// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Explore my collection of GitHub repositories, featuring my projects and coursework.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-founding-mcmaster-robosub",
      
        title: "Founding McMaster RoboSub",
      
      description: "this is coming soon!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/images/";
        
      },
    },{id: "post-erion-keka-on-linkedin-i-am-ecstatic-and-extremely-proud-to-share-that-our-team-finished-in-2nd",
      
        title: 'Erion Keka on LinkedIn: I am ecstatic and extremely proud to share that... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "I am ecstatic and extremely proud to share that our team finished in 2nd out of 200+ groups in the end of year 1P13 Engineering Design Showcase!We tasked…",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.linkedin.com/feed/update/urn:li:activity:7053450939617193984/", "_blank");
        
      },
    },{id: "news-started-position-as-assistant-director-at-mathnasium",
          title: 'Started position as Assistant Director at Mathnasium.',
          description: "",
          section: "News",},{id: "news-started-third-year-of-electrical-engineering-at-mcmaster-university",
          title: 'Started third-year of Electrical Engineering at McMaster University.',
          description: "",
          section: "News",},{id: "news-started-position-as-electrical-engineering-intern-at-jitterware",
          title: 'Started position as Electrical Engineering Intern at Jitterware.',
          description: "",
          section: "News",},{id: "projects-spatial-mapping-system",
          title: 'Spatial Mapping System',
          description: "A LiDar powered spatial mapping device.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-stack-n-slice",
          title: 'Stack N Slice',
          description: "The ultimate sandwich maker.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-snake-game",
          title: 'Snake Game',
          description: "Snake Game developed using Object Oriented Design principles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-analog-to-digital-converter",
          title: 'Analog-To-Digital Converter',
          description: "Designed an 3-bit Analog-to-Digital Converter.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-dc-power-supply",
          title: 'DC Power Supply',
          description: "Built a DC Power Supply.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-amplifier-circuit",
          title: 'Amplifier Circuit',
          description: "Designed an amplifier circuit.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-wall-e-the-sumobot",
          title: 'Wall-E The SumoBot',
          description: "A bot for the McMaster SumoBot Competition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SumoBot/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
