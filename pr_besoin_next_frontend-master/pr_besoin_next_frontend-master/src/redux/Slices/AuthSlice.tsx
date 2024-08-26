import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { usersLogin, forgotPassword, verifyOTP, getbyIdRole, createUser } from "../Api/AuthAPi";

interface User {
  _id: string;
  email: string;
  password: string;
}

interface UserState {
  user: User[];
  Auth:any;
  createUser: User[];
  forgotUser: User[];
  mode: any[]; // Adjust type as per your requirements
  loading: boolean;
  auth: boolean;
  error: null | string;
}

const initialState: UserState = {
  user: [],
  createUser: [],
  Auth:"",
  loading: false,
  auth: false,
  error: null,
  forgotUser: [],
  mode: [],
};

export const createUserSlice = createAsyncThunk<User[], any>(
  'user/createUserSlice', // Unique action type string
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await createUser(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);

export const createLoginSlice = createAsyncThunk<User[], any>(
  'user/createLoginSlice', // Unique action type string
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await usersLogin(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }
);

export const createForgotSlice = createAsyncThunk<User[], any>(
  'user/createForgotSlice', // Unique action type string
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await forgotPassword(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error in forgot password:", error);
      throw error;
    }
  }
);

export const createOTPverfiySlice = createAsyncThunk<User[], any>(
  'user/createOTPverfiySlice', // Unique action type string
  async (data: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await verifyOTP(data);
      return response.data as User[];
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  }
);

export const creategetByIdRoleSlice = createAsyncThunk< any,any>(
  'Auth/creategetByIdRoleSlice', // Unique action type string
  async (id: any) => {
    try {
      const response: AxiosResponse<any, any> | undefined = await getbyIdRole(id);
      console.log(response,"myidresponse")
      return response.data as any;
    } catch (error) {
      console.error("Error fetching user roles:", error);
      throw error;
    }
  }
);

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserSlice.fulfilled, (state, action) => {
        state.createUser = action.payload;
        state.loading = false;
        state.auth = true;
      })
      .addCase(createUserSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error creating user";
      })
      .addCase(createLoginSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLoginSlice.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.auth = true;
      })
      .addCase(createLoginSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error logging in";
      })
      .addCase(createForgotSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createForgotSlice.fulfilled, (state, action) => {
        state.forgotUser = action.payload;
        state.loading = false;
      })
      .addCase(createForgotSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error in forgot password";
      })
      .addCase(createOTPverfiySlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOTPverfiySlice.fulfilled, (state) => {
        state.loading = false;
        state.auth = true;
      })
      .addCase(createOTPverfiySlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error verifying OTP";
      })
      .addCase(creategetByIdRoleSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(creategetByIdRoleSlice.fulfilled, (state, action) => {
        state.Auth = action.payload; 
        state.loading = false;
      })
      .addCase(creategetByIdRoleSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = "Error fetching user roles";
      });
  },
});

export default AuthSlice.reducer;
