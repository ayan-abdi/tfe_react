import { createReducer } from "@reduxjs/toolkit";
import {
  userLogout,
  userSendError,
  userToken,
  userClearError,
} from "../actions/action";

// Initialiser mon state
const initialState = {
  token: null,
  expire: null,
  pseudo: null,
  isAdmin: null,
  error: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userToken.type, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(userLogout.type, (state, action) => {
      return {
        ...initialState,
      };
    })
    .addCase(userSendError.type, (state, action) => {
      return {
        ...state,
        error: true,
      };
    })
    .addCase(userClearError.type, (state, action) => {
      return {
        ...state,
        error: true,
      };
    });
});
