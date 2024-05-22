export const techs: Tech[] = [
  {
    imageSrc: "/tech/next.png",
    imageAlt: "nextjs",
    pathURL: "https://nextjs.org/",
  },
  {
    imageSrc: "/tech/node.png",
    imageAlt: "nodejs",
    pathURL: "https://nodejs.org/en/",
  },
  {
    imageSrc: "/tech/nextauth.png",
    imageAlt: "nextauth",
    pathURL: "https://next-auth.js.org/",
  },
  {
    imageSrc: "/tech/fastapi.png",
    imageAlt: "fastapi",
    pathURL: "https://fastapi.tiangolo.com/",
  },
  {
    imageSrc: "/tech/gql.png",
    imageAlt: "graphql",
    pathURL: "https://graphql.org/",
  },
  {
    imageSrc: "/tech/prisma.png",
    imageAlt: "prisma",
    pathURL: "https://www.prisma.io/",
  },
  {
    imageSrc: "/tech/pg.png",
    imageAlt: "postgresql",
    pathURL: "https://www.postgresql.org/",
  },
  {
    imageSrc: "/tech/tailwind.png",
    imageAlt: "tailwindcss",
    pathURL: "https://tailwindcss.com/",
  },
  {
    imageSrc: "/tech/nginx.png",
    imageAlt: "nginx",
    pathURL: "https://nginx.org/",
  },
  {
    imageSrc: "/tech/pm2.png",
    imageAlt: "pm2",
    pathURL: "https://pm2.keymetrics.io/",
  },
  {
    imageSrc: "/tech/git.png",
    imageAlt: "git",
    pathURL: "https://git-scm.com/",
  },
  {
    imageSrc: "/tech/passportJs.png",
    imageAlt: "PassportJS",
    pathURL: "https://passportjs.org/",
  },
];

type Tech = {
  imageSrc: string;
  imageAlt: string;
  pathURL: string;
};
