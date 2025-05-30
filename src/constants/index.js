const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 7.5, suffix: "grade", label: "Satisfied Capstone Project" },
    { value: 10, suffix: "+", label: "Hand on Projects" },
    { value: 90, suffix: "%", label: "Project Retention Rate" },
];

// const logoIconsList = [
//     {
//         imgPath: "/images/logos/company-logo-1.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-2.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-3.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-4.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-5.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-6.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-7.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-8.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-9.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-10.png",
//     },
//     {
//         imgPath: "/images/logos/company-logo-11.png",
//     },
// ];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Frontend Expertise",
        desc: "Building responsive, user-friendly interfaces with ReactJS, TypeScript, and modern UI libraries.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Real-World Projects",
        desc: "Led impactful projects like AI-based helmet violation detection and an AI mock interview platform.",
    },
    {
        imgPath: "/images/time.png",
        title: "Growth Mindset",
        desc: "Always eager to learn and improve through real-world challenges and continuous feedback.",
    },
];

const techStackImgs = [
    {
        name: "Figma Designer",
        imgPath: "/images/logos/figma.png",
    },
    // {
    //     name: "Python Developer",
    //     imgPath: "/images/logos/python.svg",
    // },
    // {
    //     name: "Backend Developer",
    //     imgPath: "/images/logos/node.png",
    // },
    // {
    //     name: "Interactive Developer",
    //     imgPath: "/images/logos/three.png",
    // },
    // {
    //     name: "Project Manager",
    //     imgPath: "/images/logos/git.svg",
    // },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    // {
    //     name: "Python Developer",
    //     modelPath: "/models/python-transformed.glb",
    //     scale: 0.8,
    //     rotation: [0, 0, 0],
    // },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [

    {
        review: "Kien brought structure and clarity to the graduation project, combining strong UI development with real-time data integration and thoughtful UX design.",
        imgPath: "/images/exp_fpt.png",
        logoPath: "/images/logo_fpt.png",
        title: "Graduation Project – Helmet Violation Detection",
        date: "December 2024 – May 2025",
        responsibilities: [
            "Designed and built a real-time helmet violation detection interface using ReactTS.",
            "Implemented camera streaming, bounding box rendering, and violation data visualization.",
            "Connected frontend with AI detection output and automated notification systems.",
        ],
    },
    {
        review: "Kien’s side project showed creativity and user empathy. His AI-powered interview app was well-structured and responsive, with good use of modern libraries.",
        imgPath: "/images/exp_fpt.png",
        logoPath: "/images/logo_fpt.png",
        title: "Personal Project – AI Interview Assistant",
        date: "March 2025 – April 2025",
        responsibilities: [
            "Developed an interactive AI interview platform using ReactTS and Vapi.",
            "Integrated voice input/output and tailored interview question generation.",
            "Collected user feedback and improved UI using Shad UI components..",
        ],
    },
    {
        review: "Kien demonstrated great ownership and speed during his internship. He consistently delivered quality UI components while actively collaborating with backend teams and designers.",
        imgPath: "/images/exp_fpt_software.png",
        logoPath: "/images/logo_fpt_software.png",
        title: "Intern Frontend Developer",
        date: "January 2024 - May 2024",
        responsibilities: [
            "Developed responsive UI components using ReactJS and TailwindCSS mixed with Kibana Elastic search to apply chart on view.",
            "Integrated RESTful APIs with frontend modules to ensure seamless data flows.",
            "Participated in daily standups, code reviews, and sprint planning in an Agile environment.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

// const testimonials = [
//     {
//         name: "Esther Howard",
//         mentions: "@estherhoward",
//         review:
//             "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//         imgPath: "/images/client1.png",
//     },
//     {
//         name: "Wade Warren",
//         mentions: "@wadewarren",
//         review:
//             "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//         imgPath: "/images/client3.png",
//     },
//     {
//         name: "Guy Hawkins",
//         mentions: "@guyhawkins",
//         review:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         imgPath: "/images/client2.png",
//     },
//     {
//         name: "Marvin McKinney",
//         mentions: "@marvinmckinney",
//         review:
//             "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
//         imgPath: "/images/client5.png",
//     },
//     {
//         name: "Floyd Miles",
//         mentions: "@floydmiles",
//         review:
//             "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
//         imgPath: "/images/client4.png",
//     },
//     {
//         name: "Albert Flores",
//         mentions: "@albertflores",
//         review:
//             "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//         imgPath: "/images/client6.png",
//     },
// ];

const socialImgs = [
    {
        name: "instagram",
        url: "https://www.instagram.com/nt.kien._/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/ChumKinn1699/",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/pengnk/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    // logoIconsList,
    counterItems,
    expCards,
    expLogos,
    // testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};