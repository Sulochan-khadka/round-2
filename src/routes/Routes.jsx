import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from '../components/homepage/Home.jsx';
import Test from '../Test.jsx';
import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider.jsx';

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
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
};

export default Routes;
