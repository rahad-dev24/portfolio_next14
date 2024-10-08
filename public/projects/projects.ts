export const projects: projects[] = [
  {
    name: "ERP System Frontend",
    img: "/poster.png",
    live: "https://tomaatostore.soon.it/",
    // code: "Development phase",
    desc: "Based on the ERP System backend simplifying the process of management of the store and E-commerce site. Fully functional and ready to be used. Deployed on GCP.  ",
    techStack:
      "Next.js, React Query, TypeScript, Tailwind CSS, Shadcn/ui, docker.",
    imgAlt: "",
    github: "",
  },

  {
    name: "E-commerce Backend",
    img: "/graphql.svg",
    live: "https://tomaatostore.soon.it/graphql",
    //code: "Contact for code review",
    desc: "E-Commerce Backend with complete ERP System and store management. Implimenting a complete ERP System and store management, including product management, order management, inventory management, customer management, product management, sales and revenue tracking, secrch functionality, pagination, role based authentication and authorization.",
    techStack:
      "Nodejs, Apollo server, GraphQL, PostgreSQL, Prisma, TypeScript, role based Auth, docker.",
    imgAlt: "",
  },
  {
    name: "E-commerce Frontend (Development phase)",
    img: "/tomaato-store.svg",
    live: "Coming soon",
    desc: "E-Commerce App with GraphQL API",
    techStack:
      "Nextjs, Tailwind CSS, Shadcn UI, TypeGraphQL, React Query, TypeScript, Session based Auth.",
    imgAlt: "",
  },

  {
    name: "Result Processing and Management with student administration System",
    img: "/expressjs-icon.svg",
    code: "Contact for code review",
    desc: "An automated system for processing, publishing and archiving results for University as well as student administration system",
    techStack:
      "Nodejs, Express, Pug, CSS, Javascript, Sequelize ORM, PostgreSQL, Redis, Bcrypt, Passportjs.",
    imgAlt: "",
    github: "",
  },
];

type projects = {
  name: string;
  img: string;
  live?: string;
  code?: string;
  desc?: string;
  github?: string;
  techStack?: string;
  imgAlt?: string;
};
