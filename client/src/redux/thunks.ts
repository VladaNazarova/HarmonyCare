import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosError, AxiosResponse } from 'axios';
import { ServiceTypes, ServicesType, userType, userLoggedType, UserType, } from "../types/types";

export const fetchAddUser = createAsyncThunk(
  "user/create",
  async (user: userType) => { 
    const response: AxiosResponse<userType> = await axios.post(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_API}/register`, user, { withCredentials: true });
    return response.data;
  } 
);

export const fetchLoginUser = createAsyncThunk(
  "user/login",
  async(loggedUser: userLoggedType) => {
    const response: AxiosResponse<userLoggedType> = await axios.post(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_API}/login`, loggedUser, { withCredentials: true });
    return response.data
  }
)

export const fetchLogoutUser = createAsyncThunk(
  "user/logout",
  async() => {
    const response: AxiosResponse = await axios.get(`${import.meta.env.VITE_URL}/${import.meta.env.VITE_API}/logout`, {withCredentials: true});
    return response.data
  }
)

export const fetchGetServices = createAsyncThunk('services/all', async ()=>{
  const response = await axios.get<ServicesType>(
    `${import.meta.env.VITE_URL}/services`
  );
  return response.data
})



export const fetchPageService = createAsyncThunk(
  "service/page",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get<{
        service: ServiceTypes;
        specialist: UserType;
      }>(`${import.meta.env.VITE_URL}/services/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
