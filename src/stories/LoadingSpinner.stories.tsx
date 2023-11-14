import React from 'react';
import LoadingSpinner from '../loader/LoadingSpinner/LoadingSpinner';

export default {
  title: 'Loading/Spinner',
  component: LoadingSpinner,
};

export const Default = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingSpinner />
  </div>
);


export const Color = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingSpinner color='red'/>
  </div>
);


export const Size = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <LoadingSpinner size='120px'/>
  </div>
);