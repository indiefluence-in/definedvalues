import React from "react";
import MetaTag from "../common/metatag";
import FAQ from "../components/faq";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"FAQ"} />
      <FAQ />
    </WrapperFour>
  );
};

export default index;
