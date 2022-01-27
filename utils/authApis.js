import axios from "axios";
import catchErrors from "./catchError";
import { baseURL } from "./constants";

export const registerUser = async (
  { username, email, password, referal },
  setMsg,
  setLoading
) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/signup`, {
      username,
      email,
      password,
      referal,
    });
    if (res.status === 200) {
      setMsg(res.data.msg);
    }
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
  }
  setLoading(false);
};

export const loginUser = async (
  { email, password },
  setError,
  setLoading,
  handleModal
) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/auth`, {
      email,
      password,
    });
    setToken(res.data.token);
    handleModal(false);
    Router.push("/");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};

export const onboardUser = async (
  verificationToken,
  setLoading,
  setError,
  setSuccessmsg
) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${baseURL}/api/onboarding/${verificationToken}`
    );
    setSuccessmsg(true);
    setToken(res.data.token);
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};

export const forgetPassword = async (
  { email },
  setError,
  setLoading,
  handleModal,
  setSuccessMsg
) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/auth/forgot-password`, {
      email,
    });
    setSuccessMsg("Email is sent, Check your email");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};

export const resetPassword = async (
  { password, cpassword, token },
  setError,
  setLoading,
  handleModal,
  setSuccessMsg
) => {
  setLoading(true);
  try {
    const res = await axios.put(`${baseURL}/api/auth/reset-password/${token}`, {
      password,
      cpassword,
    });
    setSuccessMsg("Password reset complete");
    handleModal(false);
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};

export const updateProfile = async (
  data,
  setError,
  setLoading,
  setSuccessMsg
) => {
  setLoading(true);
  try {
    const res = await axios.put(`${baseURL}/api/auth/`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: cookie.get("token"),
      },
    });
    setSuccessMsg("Profile updated");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
  setLoading(false);
};
