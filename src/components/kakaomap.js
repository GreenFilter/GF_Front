/* global kakao */
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const { kakao } = window;

const Kakaomap = () => {
  const [map,setMap] = useState(null);

  useEffect(()=>{
      const container = document.getElementById('map');
      const options = { center: new kakao.maps.LatLng(35.02183802890798, 126.78367150900264) };
      const kakaoMap = new kakao.maps.Map(container, options);

      const markerPosition  = new kakao.maps.LatLng(35.02183802890798, 126.78367150900264); 
      const marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(kakaoMap);
      setMap(kakaoMap);
  },[])

  return (
      <div id="map" css={css`width: 80%; height: 735px; margin: 0 auto; border-radius: 20px;`}></div>
  );
};

export default Kakaomap;