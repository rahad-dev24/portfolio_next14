import React from "react";
import GuideCard from "@/components/GuideCard";

const Page = () => {
  return (
    <article className="mb-32">
      <GuideCard
        className="md:w-[70%] lg:w-[60%] m-auto"
        preHeight="md:h-[650px]"
      />
    </article>
  );
};

export default Page;
