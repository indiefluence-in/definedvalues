import React from "react";
import MetaTag from "../common/metatag";
import About from "../components/about";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"About"} />
      <About />
    </WrapperFour>
  );
};

export default index;
