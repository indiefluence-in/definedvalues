import React from "react";
import MetaTag from "../common/metatag";
import Register from "../components/register";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Register"} />
      <Register />
    </WrapperFour>
  );
};

export default index;
