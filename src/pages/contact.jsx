import React from "react";
import MetaTag from "../common/metatag";
import Contact from "../components/contact";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Contact"} />
      <Contact />
    </WrapperFour>
  );
};

export default index;
