import axios from "axios";
import { AsyncStorage } from "react-native";
import catchErrors from "./catchError";
import { baseURL } from "./constants";

export const usernameAvailabilityCheck = async (
  username,
  setAvailableMsg,
  setAvailableType
) => {
  try {
    const res = await axios.get(`${baseURL}/api/signup/${username}`);
    if (res.status === 200) {
      setAvailableMsg(res.data.msg);
      setAvailableType("SUCCESS");
    }
    console.log("res.status =>", res.data);
  } catch (error) {
    console.log("Erors =>", error);
    const errorMsg = catchErrors(error);
    setAvailableMsg(errorMsg);
    setAvailableType("FAIL");
  }
};

export const registerUser = async (
  { username, email, password, referal },
  setMsg,
  setLoading,
  setMsgType
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
      setMsgType("SUCCESS");
    }
    console.log("res.status =>", res.data);
  } catch (error) {
    console.log("Erors =>", error);
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
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

export const verifyOtp = async (otp, setLoading, setMsg, setMsgType) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/onboarding/${otp}`);
    setMsg(true);
    setMsgType("SUCCESS");
    AsyncStorage.setItem("token", res.data.token);
    setToken(res.data.token);
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
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

const searchUser = async (value, setUsers, setMsg) => {
  try {
    const res = await axios.post(`${baseURL}/api/signup`, {
      username,
      email,
      password,
      referal,
    });
    if (res.status === 200) {
      setMsg(res.data.msg);
      setMsgType("SUCCESS");
    }
    console.log("res.status =>", res.data);
  } catch (error) {
    console.log("Erors =>", error);
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
  }
  setLoading(false);
};
