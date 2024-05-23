export const projects: projects[] = [
  {
    name: "Portfolio",
    img: "/projects/cat.png",
    live: "https://portfolio-rahad.vercel.app/",
    desc: "Personal Portfolio",
  },
  {
    name: "Movie Streaming",
    img: "/projects/cat.png",
    live: "https://movie-streaming-ten.vercel.app/",
    desc: "Movie Streaming App",
  },
];

type projects = {
  name: string;
  img: string;
  live: string;
  desc?: string;
};
