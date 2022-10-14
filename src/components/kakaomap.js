/* global kakao */
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const { kakao } = window;

const Kakaomap = () => {
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  function onGeoOk(position) {
    setLat(position.coords.latitude); // 위도
    setLon(position.coords.longitude); // 경도
  }

  function onGeoError() {
    alert("Can't find you");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
  };

  navigator.geolocation.watchPosition(onGeoOk, onGeoError, options);
  useEffect(() => {
    console.log(lat, lon);
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(lat, lon), level: 2 };
    const kakaoMap = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(lat, lon);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(kakaoMap);
    setMap(kakaoMap);
  }, [lat, lon]);

  return (
    <div
      id="map"
      css={css`
        width: 85%;
        height: 68.06%;
        margin: 0 auto;
        margin-top: 4.35vh;
        border-radius: 20px;
        box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
      `}
    ></div>
  );
};

export default Kakaomap;
