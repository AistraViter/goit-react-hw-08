import axios from "axios";
import { toast } from "react-hot-toast"; // Імпорт toast

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      toast.error("A user with this email is already registered."); // Заміна alert на toast.error
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", creds);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    toast.error("Incorrect username or password. Please try again."); // Заміна alert на toast.error
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader("");
  } catch (e) {
    setAuthHeader("");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (e) {
      setAuthHeader("");
      return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

