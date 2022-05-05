// Etape 1 token à configuer
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

import jwtDecode from "jwt-decode";
// librery qui permet de decoder un token

export const userToken = createAction("user/token", ({ token, expire }) => {
  const { pseudo, isAdmin } = jwtDecode(token);
  return {
    payload: {
      token,
      expire,
      pseudo,
      isAdmin,
      // Pour decoder un token faut mieux etre admin
    },
  };
});

export const userLogout = createAction("user/logout");

export const userSendError = createAction("user/sendError");

export const userLogin = ({ identity, password }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:2020/api/auth/login", { identity, password })
      .then(({ data }) => {
        dispatch(userToken(data));
      })
      .catch(() => {
        dispatch(userSendError());
      });
  };
};

export const userRegiter = ({ pseudo, email, password }) => {
  return (dispatch) => {
    axios
      .post("http://localhost:2020/api/auth/register", {
        pseudo,
        email,
        password,
      })
      .then(({ data }) => {
        dispatch(userToken(data));
      })
      .catch(() => {
        dispatch(userSendError());
      });
  };
};
