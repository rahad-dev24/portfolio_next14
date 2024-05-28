import { guides } from "@/public/guides";

const GuideCard = ({
  className,
  preHeight,
}: {
  className?: string;
  preHeight?: string;
}) => {
  return (
    <div className={`grid gap-8 px-2 py-8 ${className}`}>
      <h2 className="text-3xl font-bold text-center  ">Guides</h2>
      {guides.map((index) => {
        return (
          <article
            key={index.name}
            className="grid grid-flow-row gap-2 border border-gray-600 rounded p-4 hover:border-gray-50 group "
          >
            <h3 className="border-b border-gray-600 group-hover:border-gray-50 text-2xl font-bold text-center">
              {index.name}
            </h3>
            <pre
              className={`w-full h-96 overflow-x-scroll no-scrollbar ${preHeight}`}
            >
              {index.manual}
            </pre>
          </article>
        );
      })}
    </div>
  );
};

export default GuideCard;
