import { animationCreate } from "@/utils/utils";
import React, {useEffect} from "react";
import BackToTop from "../lib/BackToTop";
import Footer from "./footers/footer";
import Header from "./headers/header";
import HeaderThree from "./headers/header-3";

const Wrapper = ({ children }) => {
  
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])

  return (
    <>
      <HeaderThree />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default Wrapper;
