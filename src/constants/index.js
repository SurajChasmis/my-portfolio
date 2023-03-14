import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    foodie,
    buyit,
    onlineupahaar,
    threejs,
} from "../assets";

export const navLinks = [{
            id: "about",
            title: "About",
        },
        {
            id: "work",
            title: "Work",
        },

     {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Research",
        icon: web,
        description: "Gathering informations about your product and his goals. Researching your industry ",
    },
    {
        title: "Prototype",
        icon: mobile,
        description: "Turning the research into a solution thats will meet your goals and will be efficient for your users.",
    },
    {
        title: "Design",
        icon: backend,
        description: "Combining the form and the function to make sure your user have a delightful experience.",
    },
    {
        title: "Build",
        icon: creator,
        description: "Following along the developpment to ensure that nothing was left on the side.",
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Foodie App",
        description: "The foodie app is a platform for delivery that links patrons with their preffered restaurants and enables them to purchase food online and have it delivered right to their door.",
        tags: [{
                name: "UX/UI",
                color: "blue-text-gradient",
            },
            {
                name: "Product Design",
                color: "green-text-gradient",
            },
            {
                name: "UI Libraries",
                color: "pink-text-gradient",
            },
        ],
        image: foodie,
        source_code_link: "https://www.behance.net/gallery/165949555/Foodie-App-Case-Study",
    },
    {
        name: "BUY IT Website",
        description: "Buyit is a women's cosmetics store with reasonabale price. The typical user is between the ages of 19 and 30.",
        tags: [{
                name: "UX/UI",
                color: "blue-text-gradient",
            },
            {
                name: "Research",
                color: "green-text-gradient",
            },
            {
                name: "Branding",
                color: "pink-text-gradient",
            },
        ],
        image: buyit,
        source_code_link: "https://www.behance.net/gallery/165949909/Buyit-Website",
    },
    {
        name: "Online Upahaar App Design ",
        description: "Online Upahaar is an authentic Nepalese e-commerce site. Online Upahaar provides and delivers genuine Nepalese products to customers while also promoting Nepalese products",
        tags: [{
                name: "UX/UI",
                color: "blue-text-gradient",
            },
            {
                name: "Research",
                color: "green-text-gradient",
            },
            {
                name: "Branding",
                color: "pink-text-gradient",
            },
        ],
        image: onlineupahaar,
        source_code_link: "https://www.behance.net/gallery/165950093/Online-Upahaar-App-Case-Study",
    },
];

export { services, technologies, experiences, testimonials, projects };