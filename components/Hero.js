import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import { BoxAnimation } from "./BoxAnimation";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="max-w-6xl mx-auto flex flex-row overflow-hidden">
      {/* Text container */}

      <div className="md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <div>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Nick Ahlers
            </h3>
          </div>
          <div className="w-80">
          <BoxAnimation color={colors[3]}>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-5">
              Developer.
            </h3>
          </BoxAnimation>
          </div>
          <div className="w-48">
          <BoxAnimation color={colors[2]}>
            <h3 className="text-5xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-5">
              IT Pro.
            </h3>
          </BoxAnimation>
          </div>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-2/5 ml-20 ">
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
