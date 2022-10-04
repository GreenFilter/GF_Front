/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as I from "../assets/svg";
import * as C from "../components";

function Login() {
  return (
    <div css={css`
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-size: 100vw 100vh;
      background-repeat: no-repeat;
      background-image: url('/image/backgroundLine.svg');
    `}>
      
      <div css={css`margin-top: 250px;`}>
      <I.Logo />
      </div>
      <C.InputBox margin="49" inputMargin="33px 0 23px 0" label="ID" placeholder="아이디" />
      <C.InputBox margin="34" inputMargin="0 0 15px 0" label="PW" placeholder="비밀번호" />
      <div css={
        css`
          width: 559px; 
          margin-left: 50px;

          @media screen and (max-width: 800px){
          width: 65vw;
          margin-left: 50px;
          }
        `}>
      <C.ForgetButton />
      </div>
      <C.LoginButton />
    </div>
  );
}

export default Login;