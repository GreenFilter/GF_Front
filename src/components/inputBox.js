/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";

function InputBox({margin, label, placeholder, inputMargin}) {
  return (
    <div css={css`
      font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.56rem;
      `}>
        <span css={
          css`
            margin-right: ${margin}px;
            text-align: left;
          `
        }>
          {label}
        </span>
        <input css={
          css`
            width: 609px;
            height: 75px;
            background: #FBFBFB;
            border: 0;
            box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1.56rem;
            padding: 0 0 0 50px;
            margin-bottom: ${inputMargin}px;

            &::placeholder{
              color: #9B9B9B;
            }
            &:focus{
              outline: none;
            }

          `}
          placeholder={`${placeholder}를 입력하세요.`} 
        />
    </div>
  )
  
}

export default InputBox;