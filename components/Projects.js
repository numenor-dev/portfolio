import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-6xl md:text-8xl font-bold pt-20 max-sm:text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-14 md:-mt-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40 -mt-4">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description }) => {
  return (
    <a href={link} className="w-full block drop-shadow-2xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="rounded-sm transform hover:scale-110 transition duration-1000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        {/* <h2 className="absolute bottom-20 left-10 text-slate-200 text-sm font-bold">
          {number === 0 ? number++ : number}
        </h2> */}
        <p className="mt-5 mr-3 text-xs text-justify">
          {description}
        </p>
      </div>
    </a>
  );
};
