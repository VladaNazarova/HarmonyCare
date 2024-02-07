import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosResponse } from 'axios';
import { userType } from "../types/types";

export const fetchAddUser = createAsyncThunk(
  "user/create",
  async (user: userType) => { 
    const response: AxiosResponse<userType> = await axios.post("http://localhost:9000/api/register", user);
    return response.data;
  } 
);



