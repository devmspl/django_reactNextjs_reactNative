"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ChangePasswordArea = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();


    if (newPassword !== confirmPassword) {
     
      toast.error("New password and confirm password do not match.");
      return;
    }
    // Update localStorage with new password
    const updatedFormValues = JSON.parse(localStorage.getItem('islogin') || '{}');
    updatedFormValues.password = newPassword; 
    localStorage.setItem('islogin', JSON.stringify(updatedFormValues));
    toast.success("Password updated successfully!");

    setTimeout(() => {
      window.location.href='/';
    }, 2000);
  };

  return (
    <div className="dashboard-body change-body">
      <div className="mt-0 ">
        <div className="position-relative ">
          <h2 className="main-title ">Change Password</h2>

          <div className="bg-white card-box border-20">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="dash-input-wrapper mb-20">
                    <label htmlFor="">Old Password*</label>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="dash-input-wrapper mb-20">
                    <label htmlFor="">New Password*</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="dash-input-wrapper mb-20">
                    <label htmlFor="">Confirm Password*</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="button-group d-inline-flex align-items-center">
                <button type="submit" className="dash-btn-two tran3s rounded-3">
                  Save & Updated
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordArea;
