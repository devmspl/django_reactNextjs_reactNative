"use client";
import React, { useState } from "react";
import ErrorMsg from "../common/error-msg";
import { Resolver, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RegisterForm from "./register-form";

type FormData = {
  email: string;
  isLogin: boolean;
};

const initialFormValues: FormData = {
    email: "bilhon@gmail.com",
    
    isLogin:true,
  };

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email is required.",
          },
        }
      : {},
  };
};

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });



  const onSubmit = (data: FormData) => {
    const { email } = data;
    const storedUserData = JSON.parse(localStorage.getItem('userData') || '{}');
  
    if (email === initialFormValues.email) {
    
      window.location.href = '/';
    } else {
      toast.error("Invalid email.");
    }
  };
  
  
  

  return (
    <section className="registration-section position-relative pt-100 lg-pt-80 pb-150 lg-pb-80">
<div className="container">
  <div className="user-data-form">
    <div className="text-center">
      <h2>Forget Password </h2>
    </div>
    <div className="form-wrapper m-auto">
      
      <div className="tab-content mt-40">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <div className="row">
      <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              placeholder="james@example.com"
              {...register("email", { required: `Email is required!` })}
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn-three ">
        Submit
      </button>
    </form>
      </div>

      <div className="d-flex align-items-center mt-30 mb-10">
        <div className="line"></div>
        <span className="pe-3 ps-3">OR</span>
        <div className="line"></div>
      </div>
      {/* <div className="row">
        <div className="col-sm-6">
          <a
            href="#"
            className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
          >
            <Image src={google} alt="google-img" />
            <span className="ps-2">Signup with Google</span>
          </a>
        </div>
        <div className="col-sm-6">
          <a
            href="#"
            className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
          >
            <Image src={facebook} alt="facebook-img" />
            <span className="ps-2">Signup with Facebook</span>
          </a>
        </div>
      </div> */}
      <p className="text-center mt-10">
        Have an account?{" "}
        <a
          href="#"
          className="fw-500"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Sign In
        </a>
      </p>
    </div>
  </div>
</div>
</section>
    
  );
};

export default ResetPasswordForm;




    