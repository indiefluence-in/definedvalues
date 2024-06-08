import React from "react";
import MetaTag from "../common/metatag";
import BlogGrid from "../components/blog-grid";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Blog Grid"} />
      <BlogGrid />
    </WrapperFour>
  );
};

export default index;
