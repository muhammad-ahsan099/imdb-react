import React from 'react';
import { StageSpinner } from 'react-spinners-kit';
import './Loader.css';
export default function Loader() {
  return (
    <div className='body'>
      <div className='loading'>
        <StageSpinner size={45} color={'#fff'} />
      </div>
    </div>
  );
}
