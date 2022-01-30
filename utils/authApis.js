import axios from "axios";
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
  } catch (error) {
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
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
  }
  setLoading(false);
};

export const loginUser = async (value, setMsg, setLoading, setMsgType) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/auth`, value);
    if (res.data) {
      return res.data;
    }
    return;
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
  }
  setLoading(false);
};

export const verifyOtp = async (otp, setLoading, setMsg, setMsgType) => {
  setLoading(true);
  try {
    const res = await axios.post(`${baseURL}/api/onboarding/${otp}`);
    return res.data;
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

export const searchUser = async (
  value,
  setUsers,
  setMsg,
  setMsgType,
  token
) => {
  try {
    const res = await axios.get(`${baseURL}/api/search/users/${value}`, {
      headers: {
        authorization: token,
      },
    });
    if (res.status === 200) {
      setUsers(res.data);
    }
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
  }
};

export const onlineUser = async (setUsers, setMsg, setMsgType, token) => {
  try {
    const res = await axios.get(`${baseURL}/api/online/users`, {
      headers: {
        authorization: token,
      },
    });
    if (res.status === 200) {
      setUsers(res.data);
    }
  } catch (error) {
    const errorMsg = catchErrors(error);
    setMsg(errorMsg);
    setMsgType("FAIL");
  }
};
