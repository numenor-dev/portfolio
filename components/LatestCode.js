import React, { useEffect, useState } from "react";
import userData from "@constants/data";

export default function LatestCode({ repositories, latestRepo}) {
  const [repos, setRepos] = useState(repositories);

  return (
    <section className="bg-[#F1F1F1] lg:-mt-36 dark:bg-gray-900 pb-28">
      <div className="lg:max-w-5xl max-w-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-40 mx-10">
          <h1 className="text-6xl lg:text-8xl font-bold text-gray-500 mt-8 mb-2 lg:pl-0 pl-5 lg:mt-2 lg:ml-8 dark:text-slate-800 text-center lg:text-left">
            Latest Code
          </h1>
          <a
            href={`https://github.com/${userData.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 lg:mb-0 px-8 py-4 rounded-md bg-white drop-shadow-2xl 
            text-xl font-semibold flex flex-row space-x-3 items-center dark:text-gray-700
            mt-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
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
      <p className="text-base font-normal my-4 text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold group flex flex-row space-x-1 w-full items-center"
      >
        <p>View Repository</p>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="4 0 24 20" 
          stroke-width="2" 
          stroke="currentColor" 
          className="h-5 w-5 transform group-hover:translate-x-2 transition duration-500"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
      </a>
    </div>
  );
};
