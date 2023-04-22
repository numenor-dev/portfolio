import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { BoxAnimation } from "./BoxAnimation";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="max-w-6xl mx-auto flex flex-row overflow-hidden">
      {/* Text container */}

      <div className="mx-auto relative text-center mb-20 mt-4 pl-11 pt-7 lg:mt-0 lg:text-left lg:pl-0 lg:pt-20 lg:pr-24 lg:pb-20 lg:mb-0">
        <RoughNotationGroup show={true}>
          <div className="mb-1">
            <h3 className="lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200">
              Nick Ahlers
            </h3>
          </div>
          <div className="lg:w-80 w-64 lg:ml-0 ml-1">
          <BoxAnimation color={colors[3]}>
            <h3 className="lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200">
              Developer.
            </h3>
          </BoxAnimation>
          </div>
          <div className="lg:w-48 mt-5 w-40 lg:ml-0 ml-10">
          <BoxAnimation color={colors[2]}>
            <h3 className="lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200">
              IT Pro.
            </h3>
          </BoxAnimation>
          </div>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-12">
        <div className="w-2/5 ml-24">
          <img src={userData.avatarUrl} alt="avatar" className="drop-shadow-2xl" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
