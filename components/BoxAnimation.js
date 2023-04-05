import React from "react";
import { RoughNotation } from "react-rough-notation";

export const BoxAnimation = ({ color, children }) => {

return (
    <RoughNotation
        type="box"
        multiline={false}
        padding={[4, 8]}
        strokeWidth={5}
        iterations={1}
        animationDuration={2000}
        color={color}
    >
        {children}
    </RoughNotation>
  );
}