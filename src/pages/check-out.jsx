import React from "react";
import MetaTag from "../common/metatag";
import CheckOut from "../components/check-out";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Check Out"} />
      <CheckOut />
    </WrapperFour>
  );
};

export default index;
