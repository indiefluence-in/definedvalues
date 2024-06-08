import React from "react";
import MetaTag from "../common/metatag";
import SignIn from "../components/sign-in";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"sign in"} />
      <SignIn />
    </WrapperFour>
  );
};

export default index;
