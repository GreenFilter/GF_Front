/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";

function LoginButton() {
  return(
  <>
    <button css={
      css`
        width: 733px;
        height: 65px;
        color: #ffffff;
        background: #4D9464;
        border: 0;
        box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.56rem;
        font-weight: 600;
        margin-top: 61px;
      `}
    > 로그인
    </button>
  </>)
}

export default LoginButton;