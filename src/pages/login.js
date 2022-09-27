/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as I from "../assets/svg";
import InputBox from '../components/inputBox';

function Login() {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <I.Logo />
      <InputBox margin="49" label="ID" placeholder="아이디" />
      <InputBox margin="34" label="PW" placeholder="비밀번호" />
    </div>
  );
}

export default Login;