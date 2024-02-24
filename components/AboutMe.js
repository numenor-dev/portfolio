import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl text-md md:text-lg mx-auto h-40 md:h-32 mt-20 bg-white dark:bg-gray-800">
        <p className="px-4">{userData.about.title}</p>
      </div>
        
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="pt-14 px-4 grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-y-20 gap-x-20">
          {/* Text area */}
          <div className="col-span-1 md:col-span-2 -mt-3">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-md md:text-lg text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-600 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
            <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
                alt="React"
                title="React"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
                alt="JavaScript"
                title="JavaScript"
              />
              <img
                src="https://i.ibb.co/3y581LV/nextjs.webp" 
                className="h-20 w-20 mx-4 my-4"
                alt="NextJS"
                title="NextJS"
              />
              <img
                src="https://i.ibb.co/zmXS06Z/tailwind.webp"
                className="h-20 w-20 mx-4 my-4"
                alt="Tailwind"
                title="Tailwind"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
                alt="HTML5"
                title="HTML5"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
                alt="CSS3"
                title="CSS3"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Git"
                title="Git"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
                alt="MySQL"
                title="MySQL"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
                alt="MongoDB"
                title="MongoDB"
              />
              <img src="https://i.postimg.cc/yNt4njgx/aws.jpg"
              className="h-20 w-20 mx-4 my-4"
              alt="AWS"
              title="AWS"
              />
            </div>
          </div>
          {/* Social Buttons */}
          <div className="inline-flex flex-col ml-20">
            {/* Social Links */}
            <h1 className="text-xl font-bold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-700 mt-8 dark:text-gray-200">
              Documents
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Resume
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.mernCert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-36 group-hover:translate-x-0 transition duration-300"></div>
                    Certification
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
