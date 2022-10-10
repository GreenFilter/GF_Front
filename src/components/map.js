/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as I from '../assets/svg';
import * as C from '../components';

function Map() {
  return(
    <div css={css`width: 50%;`}>
      <I.Logo />
      
      <C.Kakaomap />
    </div>
  )

}

export default Map;