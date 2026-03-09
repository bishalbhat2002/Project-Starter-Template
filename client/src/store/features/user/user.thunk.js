import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../utilities/axiosInstance";



/**
 * For handling the asyncronous operations related to user such as registration, login, logout, etc. we create a asyncronous thunks using createAsyncThunk from Redux Toolkit. These thunks will be dispatched from the respective components and will handle the API calls and state updates accordingly.
 * 
 */



/**
 * These are the examples of thunk. You can delete these and create your own thunks according to your requirements. Just make sure to handle the pending, fulfilled, and rejected states in the userSlice for each of these thunks to update the state accordingly.
 */



/**
 * 
 * Normal text data send and fetch thunk
 * 
 */

// Code to verify email during User registration...

// export const verifyRegisterEmailThunk = createAsyncThunk(
//   "verifyRegisterEmail",
//   async ({ email }, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstance.post(
//         "/user/get-verification-code-for-register",
//         { email },
//       );

//       // Verification Code success message
//       return response?.data?.message;
//     } catch (error) {
//       console.log("error:", error);
//       return rejectWithValue(error?.response?.data?.message);
//     }
//   },
// );



/**
 * 
 * File or photo data send to backend thunk
 * 
 */


// Code to change profile pic...
// export const changeProfilePicThunk = createAsyncThunk(
//   "changeProfilePicture",
//   async (photo, { rejectWithValue }) => {
//     try {
//       if (!photo) {
//         rejectWithValue("No photo selected.");
//       }

//       const formData = new FormData();
//       formData.append("profile-photo", photo);
//       const response = await axiosInstance.put(
//         `/user/edit-profile-pic`,
//         formData,
//       );

//       //  console.log(response?.data)
//       return response?.data; // return created post and success message object...
//     } catch (error) {
//       console.log("error:", error?.response);
//       return rejectWithValue(error?.response?.data?.message);
//     }
//   },
// );
