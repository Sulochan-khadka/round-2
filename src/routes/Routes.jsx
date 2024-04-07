// // import React from "react";
//
// import NameBox from "./components/NameBox";
// import ThemeSwitcher from "./components/ThemeSwitcher";
//
// const StyleTag = () => {
//
//   console.log(themeMode.theme);
//   return (
//     <Helmet>
//       <style>{Styles(themeMode.theme)}</style>
//     </Helmet>
//   );
// };

// function App() {

//   return (
//
//       <div>
//         <StyleTag />
//         <NameBox />
//         <ThemeSwitcher />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/homepage/Home.jsx';
import Test from '../Test.jsx';
import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import ThemeSwitcher from './components/ThemeSwitcher';
import { THEME_TYPE } from './constants';
import Styles from '../data/Styles.js';
import { ThemeContext, ThemeProvider } from './providers/ThemeProvider';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<Home />} />
      <Route path='test' element={<Test />} />
    </Route>
  )
);

const Routes = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <style>{Styles(themeMode.theme)}</style>
      </Helmet>
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
};

export default Routes;
