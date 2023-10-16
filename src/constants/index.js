import {
  backend,
  carrent,
  creator,
  css,
  figma,
  git,
  html,
  javascript,
  XTomsk,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  tailwind,
  threejs,
  tripguide,
  histPlace,
  ToDo,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Обо мне",
    },
    {
      id: "work",
      title: "Опыт работы",
    },
    {
      id: "contact",
      title: "Контакты",
    },
  ];
  
  const services = [
    {
      title: "Веб разработчик",
      icon: web,
    },
    {
      title: "Создатель контента",
      icon: creator,
    },
    {
      title: "Фронтенд разработчик",
      icon: mobile,
    },
    {
      title: "Бэкэнд разработчик",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Разработчик",
      company_name: "Xtomsk",
      icon: shopify,
      iconBg: "#383E56",
      date: "Июнь 2023",
      points: [
        "Разработка и сопровождение веб-приложений с использованием React.js и другими технологиями.",
        "Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
      ],
    },
    {
      title: "Веб Разработчик",
      company_name: "Sheikh Auto",
      icon: shopify,
      iconBg: "#383E56",
      date: "Август 2023 - Настоящее время",
      points: [
        "Разработка и сопровождение веб-приложений с использованием Wordpress и другими технологиями.",
        "Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
      ],
    },
    {
      title: "Фулл-Стек Разработчик",
      company_name: "Исторический Томск",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Июль 2023",
      points: [
        "Разработка и сопровождение веб-приложений с использованием React.js и другими технологиями.",
        "Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
      ],
    },
    {
      title: "Веб Разработчик",
      company_name: "Iclima",
      icon: shopify,
      iconBg: "#383E56",
      date: "Сентябрь 2023 - Настоящее время",
      points: [
        "Разработка и сопровождение веб-приложений с использованием Wordpress и другими технологиями.",
        "Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Исторический Томск",
      description:
        "Веб-платформа, которая позволяет пользователям искать исторические места, получать информацию и оставлять отзывы об исторических местах.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: histPlace,
      source_code_link: "https://github.com/bliinmaker/historicaltomsk-frontend",
    },
    {
      name: "XTomsk",
      description:
        "Веб-платформа, которая позволяет пользователям искать, бронировать и остовлять отзывы об экскурсиях.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "white-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: XTomsk,
      source_code_link: "https://github.com/bliinmaker/xtomsk",
    },
    {
      name: "ToDo App",
      description:
        "Веб-платформа, которая позволяет создовать расписание на день",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: ToDo,
      source_code_link: "https://github.com/bliinmaker/ToDo",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
