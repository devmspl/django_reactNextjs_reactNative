import React from "react";
import { Metadata } from "next";
import Header from "@/layouts/headers/header";
import Wrapper from "@/layouts/wrapper";
import JobPortalIntro from "../components/job-portal-intro/job-portal-intro";
import CompanyBreadcrumb from "../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import ForgetPassword from "../components/forms/forgetpassword-form";

export const metadata: Metadata = {
  title: "Forget Password",
  description : "Forgot your password? Reset it here. Enter your email address to receive instructions on how to reset your password.",
  keywords :"forgot password, reset password, password recovery, password reset",
};

const ForgtPass = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <Header />
        {/* header end */}

        {/*breadcrumb start */}
        <CompanyBreadcrumb
          title="Forget Password"
          subtitle=""
        />
        {/*breadcrumb end */}

        {/* faq area start */}
        <ForgetPassword />
        {/* faq area end */}

     

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ForgtPass;
