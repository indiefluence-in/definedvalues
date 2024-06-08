import React from "react";
import MetaTag from "../common/metatag";
import Cart from "../components/cart";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Cart"} />
      <Cart />
    </WrapperFour>
  );
};

export default index;
