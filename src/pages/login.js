/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as I from "../assets/svg";
import InputBox from '../components/inputBox';
import ForgetButton from '../components/forgetButton';
import LoginButton from '../components/loginButton';

function Login() {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 250px;
    `}>
      <I.Logo />
      <InputBox margin="49" inputMargin="33px 0 23px 0" label="ID" placeholder="아이디" />
      <InputBox margin="34" inputMargin="0 0 15px 0" label="PW" placeholder="비밀번호" />
      <ForgetButton />
      <LoginButton />
    </div>
  );
}

export default Login;