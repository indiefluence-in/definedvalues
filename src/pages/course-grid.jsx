import React from "react";
import MetaTag from "../common/metatag";
import CourseGrid from "../components/course-grid";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Course Grid"} />
      <CourseGrid />
    </WrapperFour>
  );
};

export default index;
