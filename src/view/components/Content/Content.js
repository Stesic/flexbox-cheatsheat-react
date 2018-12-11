import React from "react";

import { FlexContainers } from "./FlexContainers/FlexContainers.js";
import { FlexItems } from "./FlexItems/FlexItems.js";

import "./Content.css";

const Content = () => {
  return (
    <>
      <main>
        <FlexContainers />
        <FlexItems />
      </main>
        
    </>
  );
};

export { Content };
