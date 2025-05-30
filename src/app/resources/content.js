import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Andrea",
  lastName: "Ferrari",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "andreaferraridev@gmail.com",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Italian", "French", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andreaferrari95",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrea-ferrari-developer/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Make your ideas become real.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Green Pulse</strong>
      </>
    ),
    href: "/work/Green-Pulse-The-climate-data-dashboard",
  },
  subline: (
    <>
      I'm Andrea, a Frontend Developer{" "}
      <Logo
        icon={false}
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , with special interest on Environmental Issues.
      <br /> Striving to make a difference through my projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/andrea-ferrari-dev/30min?overlayCalendar=true",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrea is a Germany-based Frontend Developeer with a passion for
        transforming complex challenges into simple, elegant solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Phonetastik",
        timeframe: "2024 - Present",
        role: "Frontend Developer / Ecommerce Developer / Project Manager",
        achievements: [
          {
            key: "alkaya-website-creation",
            content:
              "Led the development of the alkaya. website, a project that involved close collaboration with the client to ensure their vision was realized.",
          },
          {
            key: "phonetastik-management",
            content:
              "Managed the Phonetastik project, overseeing development of new features and ensuring the project met its deadlines and quality standards.",
          },
          {
            key: "ecommerce-optimization",
            content:
              "Optimized the ecommerce platform and and CRM system for better performance and user experience, resulting in a 50% increase in conversion rates.",
          },
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-phonetastik.jpg",
            alt: "Phonetastik work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-alkaya.jpg",
            alt: "alkaya. work",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Madagascar film and photography",
        timeframe: "2022 - 2023",
        role: "Web Developer / Filmmaker / Photographer",
        achievements: [
          {
            key: "madagascar-website-development",
            content:
              "Developed a custom website for Madagascar film and photography, enhancing their online presence and showcasing their portfolio.",
          },
          {
            key: "madagascar-filmmaking",
            content:
              "Produced and edited high-quality video content for various projects, including promotional videos and documentaries for clients like ZDF and BBC.",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-MFP.jpg",
            alt: "Madagascar film and photography work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-ZDF.jpg",
            alt: "ZDF work",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Start 2 Impact University",
        description: (
          <>
            Studied Frontend Development and currently rounding up into
            FullStack
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React.js",
        description: (
          <>Building next gen apps with React.js + Once UI + HeroUI and more.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Green Pulse project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Utilizing Next.js for server-side rendering and static site
            generation, ensuring optimal performance and SEO for web
            applications.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Vite",
        description: (
          <>
            Using Vite for fast and efficient development, enhancing the
            development experience with its lightning-fast build times.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "JavaScript",
        description: (
          <>
            Proficient in JavaScript, the language of the web, for building
            interactive and dynamic user interfaces.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "TypeScript",
        description: (
          <>
            Leveraging TypeScript for type safety and improved developer
            experience in JavaScript applications.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>
            Styling with Tailwind CSS, a utility-first CSS framework for rapid
            UI development.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "HTLML & CSS",
        description: (
          <>
            Mastering HTML and CSS for crafting semantic, accessible, and
            visually appealing web pages.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
