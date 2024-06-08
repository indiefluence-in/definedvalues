import React from "react";
import MetaTag from "../common/metatag";
import CourseDetails from "../components/course-details";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Course Details"} />
      <CourseDetails />
    </WrapperFour>
  );
};

export default index;
