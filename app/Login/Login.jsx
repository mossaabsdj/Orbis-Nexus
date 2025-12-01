"use client";
import { Eye, EyeOff } from "lucide-react";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import Progression from "@/app/component/Proogression/page";

const COLORS = {
  formBg: "bg-gradient-to-r from-gray-700 to-gray-800",
  formBorder: "border-gray-700",
  formFocus: "focus:ring-2 focus:ring-gray-600 focus:border-gray-600",
  buttonBg: "bg-gradient-to-r from-gray-700 to-gray-800",
  buttonHover: "hover:from-gray-600 hover:to-gray-700",
  socialBg: "bg-gray-800",
  socialHover: "hover:bg-gray-700",
  paneBg: "bg-gradient-to-br from-black via-black to-gray-700",
};

const SOCIAL_ICONS = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaInstagram, label: "Instagram" },
];

const FormInput = ({ type, placeholder, value, onChange, className = "" }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`h-14 px-4 rounded-lg border-2 ${COLORS.formBorder} ${COLORS.formBg} ${COLORS.formFocus} text-white placeholder-gray-500 outline-none transition ${className}`}
    required
  />
);

const SocialButtons = () => (
  <div className="flex gap-4 mt-4">
    {SOCIAL_ICONS.map(({ Icon, label }, idx) => (
      <button
        key={idx}
        type="button"
        className={`${COLORS.socialBg} ${COLORS.socialHover} p-3 rounded-full shadow-md hover:scale-110 cursor-pointer transition`}
        aria-label={label}
      >
        <Icon className="text-gray-300" />
      </button>
    ))}
  </div>
);

const WelcomeSection = ({ title, description, isRight }) => (
  <div
    className={`hidden md:flex w-full md:w-1/2 ${
      COLORS.paneBg
    } text-white flex-col justify-center items-center text-center p-10 ${
      isRight ? "order-2" : "order-1"
    }`}
    style={{ minHeight: "600px" }}
  >
    <img
      src="/images/logo.jpeg"
      alt="Logo"
      className="w-52 h-62 rounded-3xl mb-6 shadow-2xl object-center border-2 border-gray-700"
    />
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p className="text-lg text-gray-400 max-w-sm">{description}</p>
  </div>
);

export default function FlipAuthPages() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showForogtOtpModal, setShowForogtOtpModal] = useState(false);

  const [pendingUser, setPendingUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const [resetEmail, setResetEmail] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [loginData, setLoginData] = useState({ Username: "", password: "" });

  const handleLoginChange = (field) => (e) => {
    setLoginData((prev) => ({ ...prev, [field]: e.target.value }));
  };
  const handleForgotPassword = () => {
    // Ex: ouvrir une modal, naviguer vers une page, afficher un formulaire, etc.
    setShowResetPassword(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { Username, password } = loginData;
    console.log(loginData);
    const res = await signIn("credentials", {
      Username, // ✔ send Username instead of email
      password,
      redirect: false,
      callbackUrl: "/DashBoard",
    });

    setIsLoading(false);

    if (res?.ok) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        customClass: {
          popup: "shadow-lg rounded-lg",
        },
        timer: 1500,
      }).then(() => {
        setIsLoading(true);
        window.location.href = res.url;
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password.",
        confirmButtonColor: "#d32f2f",
        customClass: {
          popup: "shadow-lg rounded-lg",
        },
      });
    }
  };

  const handleResetPassword = () => {
    setShowResetPassword(false);
    setShowForogtOtpModal(true);
  };
  return (
    <>
      {" "}
      {showResetPassword && (
        <div className="fixed inset-0 z-[1000] bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center">
          <div className="bg-gray-900 border-2 border-gray-700 p-10 rounded-3xl w-[90%] max-w-xl shadow-2xl transform scale-105">
            <h3 className="text-3xl font-extrabold text-center mb-6 text-white">
              Reset Password
            </h3>

            <p className="text-gray-400 text-base mb-6 text-center">
              Enter your email and we will send you a reset link.
            </p>

            <FormInput
              type="email"
              placeholder="Email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="text-lg w-full"
            />

            <button
              onClick={handleResetPassword}
              className="w-full mt-6 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-lg font-bold rounded-full shadow-md transition-all"
            >
              Next
            </button>

            <button
              className="w-full mt-3 text-gray-400 hover:text-gray-300 underline text-base transition-colors"
              onClick={() => setShowResetPassword(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {isLoading && <Progression isVisible={true} />}
      {showOtpModal && <></>}
      {showForogtOtpModal && <></>}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-black to-black p-4">
        <div className="w-full max-w-6xl" style={{ perspective: "2000px" }}>
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              minHeight: "600px",
            }}
          >
            {/* LOGIN PAGE (Front) */}
            <div
              className="absolute w-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              <div className="flex flex-col md:flex-row  border-2 border-gray-800  rounded-3xl shadow-2xl overflow-hidden">
                {/* Login Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col border-r-5 border-r-gray-800 justify-center items-center order-1 bg-gradient-to-br from-gray-700 via-black to-black">
                  <div className="w-full max-w-sm">
                    <h2 className="text-5xl font-extrabold text-white mb-2 text-center">
                      Log In
                    </h2>
                    <p className="text-gray-400 mb-6 text-center">
                      Welcome back! Please login to your account.
                    </p>

                    <div className="w-full flex flex-col space-y-4">
                      <FormInput
                        type="text"
                        placeholder="Username"
                        value={loginData.Username}
                        onChange={handleLoginChange("Username")}
                        className="w-full"
                      />

                      <FormInput
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleLoginChange("password")}
                        className="w-full"
                      />

                      <button
                        onClick={handleLoginSubmit}
                        className={`w-full h-14 text-xl ${COLORS.buttonBg} text-white font-bold rounded-full shadow-md ${COLORS.buttonHover} hover:scale-105 transition-all duration-200 mt-2`}
                      >
                        Log In
                      </button>
                      <p className="text-gray-400 text-sm text-center pt-2">
                        <button
                          type="button"
                          onClick={handleForgotPassword}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          Forgot Password?
                        </button>
                      </p>
                      <p className="text-gray-400 text-sm text-center pt-2">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => setIsFlipped(true)}
                          className="text-white font-semibold hover:underline"
                        >
                          Create Account
                        </button>
                      </p>

                      <div className="flex justify-center">
                        <SocialButtons />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Section - Right */}
                <WelcomeSection
                  title="Welcome Back!"
                  description="Ajoutez, explorez et gérez vos voitures et leurs informations en toute simplicité."
                  isRight={true}
                />
              </div>
            </div>

            {/* REGISTER PAGE (Back) */}
            <div
              className="absolute w-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="flex flex-col md:flex-row bg-gray-200 border-2 border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                {/* Welcome Section - Left */}
                <WelcomeSection
                  title="Join Our Community!"
                  description="Create an account to access exclusive features, track your orders, and connect with local farms."
                  isRight={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
