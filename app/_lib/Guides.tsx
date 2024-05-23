import { guides } from "@/public/guides";
const article = "";
const h3 = "text-2xl font-bold text-center";
const pre = "w-full overflow-x-scroll";
const Guides = () => {
  return (
    <div className="grid gap-8">
      <h2 className="text-3xl font-bold text-center mt-20 md:mt-36 ">Guides</h2>
      {guides.map((index) => {
        return (
          <article
            key={index.name}
            className="grid grid-flow-row gap-2 border border-gray-600 rounded p-4 hover:border-gray-50  "
          >
            <h3 className={h3}>{index.name}</h3>
            <pre className={pre}>{index.manual}</pre>
          </article>
        );
      })}
    </div>
  );
};

export default Guides;
