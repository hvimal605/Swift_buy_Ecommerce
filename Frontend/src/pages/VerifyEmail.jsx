import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authApi";

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
  }, [signupData, navigate]);

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

  const handleResendOtp = () => {
    // Resend OTP logic
    if (signupData && signupData.email) {
      dispatch(sendOtp(signupData.email));
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin h-8 w-8 border-4 border-t-4 border-gray-300 rounded-full"></div>
        </div>
      ) : (
        <div className="max-w-md p-4 lg:p-8 shadow-md rounded-lg border bg-yellow-50">
          <h1 className="text-2xl font-semibold text-gray-800">Verify Email</h1>
          <p className="text-lg text-gray-600 my-4">
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
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-2 bg-richblack-800 rounded-[0.5rem] text-xl aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-400"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-yellow-300 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-gray-600 flex items-center gap-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-500 gap-2"
              onClick={handleResendOtp}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
