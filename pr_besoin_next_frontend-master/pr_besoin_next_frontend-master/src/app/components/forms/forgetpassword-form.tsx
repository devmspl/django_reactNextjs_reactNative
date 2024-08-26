"use client";
import React, { useState } from "react";
import ErrorMsg from "../common/error-msg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  enteredOTP: string; 
};

const initialFormValues: FormData = {
  email: "bilhon@gmail.com",
  enteredOTP: "", 
};

const OtpForm = () => {
  const [email, setEmail] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { email } = data;

    // Simulate API call to check email existence
    if (email === initialFormValues.email) {
      const generatedOTP = generateOTP();
      setEmail(email);
      setShowOTPInput(true); // Show OTP input field when email is correct

      // Store OTP in localStorage
      localStorage.setItem("otp", generatedOTP);

      // Send OTP to the user (via email or SMS) - Not implemented here
      toast.success("OTP sent successfully!");
    } else {
      toast.error("Invalid email.");
    }
  };

  const onSubmitOTP = (data: FormData) => {
    const { enteredOTP } = data;
    const storedOTP = localStorage.getItem("otp");

    if (enteredOTP === storedOTP) { 
     
      window.location.href = '/change-password';
    } else {
      toast.error("Invalid OTP.");
    }
  };

  const generateOTP = () => {
    // Generate a random 6-digit OTP
    const OTP = Math.floor(100000 + Math.random() * 900000).toString();
    return OTP;
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
                <button type="submit" className="btn-three">
                  Submit
                </button>
              </form>
            </div>
            {showOTPInput && ( // Render OTP input field only when showOTPInput is true
              <div className="tab-content mt-40">
                <form onSubmit={handleSubmit(onSubmitOTP)} className="mt-10">
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-25">
                        <label>Enter OTP*</label>
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          {...register("enteredOTP", { required: `OTP is required!` })}
                          name="enteredOTP"
                        />
                        <div className="help-block with-errors">
                          <ErrorMsg msg={errors.enteredOTP?.message!} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-three">
                    Submit OTP
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtpForm;
