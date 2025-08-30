import React, { useEffect, useState } from "react";
import userData from "@constants/data";

export default function LatestCode({ repositories}) {
  const [repos, setRepos] = useState(repositories);

  return (
    <section className="bg-[#F1F1F1] flex flex-col mt-4 pb-10 dark:bg-gray-900 lg:pb-28 lg:-mt-36">
      <div className="lg:max-w-5xl max-w-2xl mx-auto">
        <div className="flex flex-col mx-10 justify-between items-center lg:mt-40">
          <h1 className="text-8xl max-sm:text-9xl mt-24 mb-2 ml-5 font-bold text-gray-800 lg:pl-0 pl-5 lg:mt-2 lg:ml-8 dark:text-slate-600 text-center lg:text-left">
            Latest Projects
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:max-w-6xl max-w-md mx-auto px-8 lg:-mt-10 gap-y-14 mt-10 lg:gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="max-w-5xl mx-auto ml-28 lg:ml-28 lg:mt-16">
      <h1 className="font-semibold text-2xl lg:text-xl dark:text-gray-200 text-gray-700">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-3 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold group flex flex-row space-x-2 w-full items-center hover:scale-105 transition-transform"
      >
        <p>View Repository</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="4 0 24 20" 
          stroke-width="2" 
          stroke="currentColor" 
          className="h-5 w-5 transform group-hover:translate-x-1 transition duration-300"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
      </a>
    </div>
  );
};
