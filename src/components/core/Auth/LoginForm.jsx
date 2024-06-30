import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full max-w-md flex-col gap-y-6 p-8 bg-white rounded-lg shadow-2xl"
    >
      <h2 className="text-center text-2xl font-semibold text-[#344648] mb-6">Sign In</h2>
      <label className="w-full">
        <p className="mb-2 text-sm font-semibold text-[#344648]">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="w-full rounded-md border border-gray-300 p-3 text-sm transition duration-200 focus:border-[#ffbe98] focus:ring-2 focus:ring-[#ffbe98]"
        />
      </label>
      <label className="relative w-full">
        <p className="mb-2 text-sm font-semibold text-[#344648]">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="w-full rounded-md border border-gray-300 p-3 text-sm transition duration-200 focus:border-[#ffbe98] focus:ring-2 focus:ring-[#ffbe98]"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-9 cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="ml-auto mt-2 text-xs text-[#344648] hover:underline">
            Forgot Password?
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-[#ffbe98] px-4 py-2 text-sm font-medium text-[#344648] transition duration-200 hover:bg-[#e6ac85] hover:scale-105 hover:shadow-md"
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
