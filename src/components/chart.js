/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

function Chart() {
  function clickButton() {
    window.location.replace('/login');
  }
  return (
    <div
      css={css`
        background-color: #4d9464;
        width: 50%;
        height: 100vh;

        @media screen and (max-width: 1080px) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 72.6%;
          margin: 0 auto;
          margin-top: 8.06vh;
        `}
      >
        <button
          css={css`
            align-self: flex-end;
            background: transparent;
            border: 0;
            color: #cfcfcf;
            font-size: 1.25rem;
            margin-bottom: 3.15vh;

            &:hover {
              cursor: pointer;
            }
            &:active {
              color: #afafaf;
            }
          `}
          onClick={clickButton}
        >
          로그아웃
        </button>

        <div
          css={css`
            height: 90px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 3.61vh;
          `}
        >
          <button
            css={css`
              font-family: 'Inter';
              font-size: 1.25rem;
              width: 90px;
              height: 90px;
              background: #fff;
              border: 0;
              border-radius: 50%;
              box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);

              &:hover {
                cursor: pointer;
              }
              &:active {
                background: #f4f4f4;
              }
            `}
          >
            start
          </button>

          <button
            css={css`
              font-size: 1.25rem;
              margin-top: 38px;
              width: 220px;
              height: 51px;
              background: #fff;
              border: 0;
              border-radius: 20px;
              box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);

              &:hover {
                cursor: pointer;
              }
              &:active {
                background: #f4f4f4;
              }
            `}
          >
            저장하기
          </button>
        </div>
        <div
          css={css`
            margin: 0 auto;
            width: 100%;
            height: 46.94vh;
            background: #fff;
          `}
        >
          chart
        </div>
        <span
          css={css`
            color: #fff;
            font-size: 1.56rem;
            text-align: center;
            margin-top: 6.57vh;
            line-height: 1.5rem;
          `}
        >
          <p>
            두둥실 님이 측정한 녹조량은{' '}
            <span
              css={css`
                font-weight: 800;
              `}
            >
              50
            </span>{' '}
            입니다
          </p>
          <br />
          <p>
            저번 측정량 보다{' '}
            <span
              css={css`
                font-weight: 800;
              `}
            >
              10%
            </span>{' '}
            늘어났어요
          </p>
        </span>
      </div>
    </div>
  );
}

export default Chart;
