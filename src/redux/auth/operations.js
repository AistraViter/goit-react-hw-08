import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";
const setAuthHeader = (token) => {axios.defaults.headers.common.Authorization = `Bearer ${token}`}

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", newUser);
      setAuthHeader (response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (creds, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", creds);
    setAuthHeader (response.data.token);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader ("");
  } catch (e) {
    setAuthHeader ("");
    return thunkAPI.rejectWithValue(e.message);
  }
});
