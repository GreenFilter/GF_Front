/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";
import * as C from "../components";

function Main() {
  return(
    <div css={css`
      display: flex;
      flex-direction: row;
    `}>
      
      <C.Map />
      <C.Chart />
    </div>
  )
}

export default Main;