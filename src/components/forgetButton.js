/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function ForgetButton() {
  return(
    <>
      <button css={css`
        font-size: 1.07rem;
        border: 0;
        background-color: transparent;
        text-decoration-line: underline;
        color: #000000;

        &:hover {
          cursor: pointer;
        }
        &:active {
          color: #6C6C6C;
        }
      `}>
        비밀번호를 잊으셨나요
      </button>
    </>
  )
}

export default ForgetButton;