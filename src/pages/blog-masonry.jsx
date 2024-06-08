import React from "react";
import MetaTag from "../common/metatag";
import BlogMasonry from "../components/blog-masonry";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Blog Masonry"} />
      <BlogMasonry />
    </WrapperFour>
  );
};

export default index;
