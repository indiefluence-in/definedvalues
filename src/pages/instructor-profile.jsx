import InstructorProfile from "@/src/components/instructor-profile";
import React from "react";
import MetaTag from "../common/metatag";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Instructor Profile"} />
      <InstructorProfile />
    </WrapperFour>
  );
};

export default index;
