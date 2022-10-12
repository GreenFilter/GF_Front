/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as I from '../assets/svg';
import * as C from '../components';

function Map() {
  return(
    <div css={css`
      width: 50%; 
      height: 100vh;
      margin-top: 3%;

      @media screen and (max-width: 1080px){
        width: 540px;
      }

      @media screen and (max-width: 550px){
        width: 100%;
      }
    `}>
      <div css={css`margin-left: 5%;`}>
        <I.Logo />
      </div>
      <C.Kakaomap />
    </div>
  )

}

export default Map;