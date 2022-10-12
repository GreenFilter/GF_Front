/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React from "react";

function Chart() {
  return(
    <div css={css`
        background-color: #4D9464;
        width: 50%;
        height: 100vh;

        @media screen and (max-width: 1080px){
          display: none;
        }
    `}>
      <div css={
        css`
          display: flex;
          flex-direction: column;
          width: 72.6%;
          margin: 0 auto;
      `}>
        <button css={css`
          align-self: flex-end;
          background: transparent;
          border: 0;
          color: #cfcfcf;
          font-size: 1.25rem;
        `}>
          로그아웃
        </button>

        <div css={css`
          height: 90px;
          display: flex;
          justify-content: space-between;
        `}>
          <button css={css`
            font-family: 'Inter';
            font-size: 1.25rem;
            width: 90px; 
            height: 90px; 
            background: #fff; 
            border: 0; 
            border-radius: 50%;
            box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
          `}>
            start
          </button>

          <button css={css`
            font-size: 1.25rem;
            margin-top: 38px;
            width: 220px; 
            height: 51px; 
            background: #fff; 
            border: 0; 
            border-radius: 20px;
            box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
          `}>
            저장하기
          </button>
        </div>
        <span css={css`
          color: #fff;
          font-size: 1.56rem;
          text-align: center;
        `}>
          두둥실 님이 측정한 녹조 양은 50 입니다 <br />
          저번 측정량 보다 10% 늘어났어요.
        </span>

      </div>
    </div>
  )
}

export default Chart;