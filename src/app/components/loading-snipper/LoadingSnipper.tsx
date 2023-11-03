'use client';
import React from 'react';
import { Circles } from 'react-loader-spinner';

function LoadingSnipper() {
  return (
    <Circles
      height="80"
      width="80"
      color="#E55604"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

export default LoadingSnipper;
