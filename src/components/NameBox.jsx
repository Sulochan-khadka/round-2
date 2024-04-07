import React, { useState, useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
// import { THEME_TYPE } from '../constants/index.js';

const NameBox = () => {
  const [themeMode, setTheme] = useContext(ThemeContext);
  return (
    <div className='box'>
      <span className='text-color'>
        {/*
      	themeMode === THEME_TYPE.DARK ? "DARK" : "LIGHT"
      	*/}
      </span>
    </div>
  );
};

export default NameBox;
