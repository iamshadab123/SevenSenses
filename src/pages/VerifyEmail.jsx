import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { sendOtp, signUp } from "../services/operations/authAPI";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gradient-to-r from-purple-600 to-blue-500 p-6">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">Verify Email</h1>
          <p className="text-lg leading-6 text-gray-600 mb-6">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  className="aspect-square w-12 rounded-md border border-gray-300 bg-gray-100 text-center text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
              containerStyle="flex justify-between gap-4 mb-6"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 text-white py-3 text-lg font-medium transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="flex items-center text-blue-600 hover:text-blue-700">
                <BiArrowBack className="mr-2" /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-600 hover:text-blue-700"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer className="mr-2" /> Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;

