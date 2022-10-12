/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as I from '../assets/svg';
import * as C from '../components';

function Map() {
  return(
    <div css={css`
      width: 50%; 
      height: 100vh;
      margin-top: 3vh;

      @media screen and (max-width: 1080px){
        width: 540px;
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