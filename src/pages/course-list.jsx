import React from "react";
import MetaTag from "../common/metatag";
import CourseList from "../components/course-list";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Course List"} />
      <CourseList />
    </WrapperFour>
  );
};

export default index;
