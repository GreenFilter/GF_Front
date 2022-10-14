/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function InputBox({ margin, label, placeholder, inputMargin, type }) {
  return (
    <div
      css={css`
        font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.56rem;
      `}
    >
      <span
        css={css`
          margin-right: ${margin}px;
          text-align: left;
        `}
      >
        {label}
      </span>
      <input
        css={css`
          width: 609px;
          height: 75px;
          background: #fbfbfb;
          border: 0;
          box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          font-family: 'Inter', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 1.56rem;
          padding: 0 0 0 50px;
          margin: ${inputMargin};

          @media screen and (max-width: 800px) {
            width: 70vw;
          }

          &::placeholder {
            color: #9b9b9b;
          }
          &:focus {
            outline: none;
          }
        `}
        type={type}
        placeholder={`${placeholder}를 입력하세요.`}
      />
    </div>
  );
}

export default InputBox;
