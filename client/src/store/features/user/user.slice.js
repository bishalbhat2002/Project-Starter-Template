import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


/**
 * Change these initial states according to your needs. These are just for example.
 * You can add more states as per your requirements.
 * For example, you can add userProfile state to store the user details after login.
 */

const initialState = {
     //   isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
     //   authLoader: true,      // To show loader untill data is read from localstorage...
     //   loader: false,

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     /**
      * These are the normal synchronous reducers. These are used to change the state in a synchronous way. For example, you can use these reducers to toggle the profile indicator, show verification code field, etc. from the components without making any API calls. 
      * 
      * These reducers are not used for any asynchobous operations. For asynchobous operations, we use extraReducers with createAsyncThunk. We call export these each of these reducers from this file and import them in the components to use them. We use these reducers by dispatching them with useDispatch hook from react-redux.
      * 
      */


     /**
      * These are just for example. you can delete these commented reducers and add your own reducers as per your requirements. These are here to give you an idea of how to use reducers for synchronous operations. You can add more reducers as per your requirements.
      */


     //     setProfileIndicator: (state, action) => {
     //       state.profileIndicator = action.payload;
     //     },

     //     toggleProfileIndicator: (state) => {
     //       state.profileIndicator = !state.profileIndicator;
     //     },

     //     loadSelfState: (state) => {
     //       const auth = localStorage.getItem("isAuthenticated");
     //       const profile = localStorage.getItem("userProfile");

     //       state.isAuthenticated = auth ? JSON.parse(auth) : false;
     //       state.userProfile = profile ? JSON.parse(profile) : null;
     //       state.authLoader = false;
     //     },




  },


  /**
   * These are the extra reducers. These are used for asynchronous operations. For example, you can use these reducers to handle the states of login, logout, register, etc. These reducers are used to change the state in an asynchronous way. For example, when you make an API call for login, you can use these reducers to handle the pending, fulfilled, and rejected states of the API call. So, for each API call handling, we add 3 cases - pending, fulfilled, and rejected. These cases are added using builder.addCase method. We use createAsyncThunk to create the asynchronous thunks for making API calls. We export these thunks from this file and import them in the components to dispatch them with useDispatch hook from react-redux.
   * 
   */


  /**
   * 
   * These are just for example. you can delete these commented extra reducers and add your own extra reducers as per your requirements. These are here to give you an idea of how to use extra reducers for asynchronous operations. You can add more extra reducers as per your requirements.
   *  
   */


  // All the asynchobous operations are put into extraReducers.
  extraReducers: (builder) => {
  
     //      // User Login States
     //     builder.addCase(loginUserThunk.pending, (state, action) => {
     //       //       console.log("pending");
     //       state.loader = true;
     //     });

     //     builder.addCase(loginUserThunk.fulfilled, (state, action) => {
     //       //  console.log(action);
     //       //       console.log("fullfilled");
     //       state.isAuthenticated = true;
     //       state.userProfile = action.payload.user; // store the user details on userProfile.
     //       state.loader = false;
     //       localStorage.setItem("isAuthenticated", JSON.stringify(true));              // Store state on localstorage.
     //       localStorage.setItem("userProfile", JSON.stringify(action.payload.user));   // store userProfile also.
     //       toast.success(action.payload?.message);
     //     });

     //     builder.addCase(loginUserThunk.rejected, (state, action) => {
     //       console.log("rejected");
     //       state.isAuthenticated = false;
     //       state.userProfile = null;
     //       state.loader = false;
     //       toast.error(action.payload);
     //     });

   




  },
});




/**
 * At the end we export the reducers and the actions. We export the reducers as default export and the actions as named exports. We can import these reducers and actions in the components to use them. We use the reducers to change the state in the components by dispatching them with useDispatch hook from react-redux. We use the actions to call the reducers in the components by dispatching them with useDispatch hook from react-redux.
 * 
 */


export const {
//   loadSelfState,
//   setProfileIndicator,
} = userSlice.actions;

export default userSlice.reducer;
