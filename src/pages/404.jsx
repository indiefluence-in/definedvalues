import Link from "next/link";
import React from "react";
import MetaTag from "../common/metatag";
import ErrorPage from "../components/error";
import WrapperFour from "../layout/wrapper-4";

const Error = () => {
  return (
    <WrapperFour>
      <MetaTag pageTitle={"Page Not Found"} />
      <ErrorPage />
    </WrapperFour>
  );
};

export default Error;
