/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React from "react";

function LoginBG() {
  return (
    <div>
      <img css={css`
        display: block;
        width: 100vw;
        height: 100vh;
      `}
        src="../../image/backgroundLine.svg" 
        alt="backgound" 
        >
        </img>
    </div>
  );
}

export default LoginBG;