import React from 'react';
import './styles.css';

import TopBar from '../top-bar'

export default function Layout({children, title}) {
  document.getElementsByTagName('title')[0].innerHTML = title;
  return (
    <>
    <TopBar />
    <div className='wrapper'>
      <h1>{title}</h1>
      {children}
    </div>
    </>
  );
}