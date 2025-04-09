import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App';
import Layout from './components/Layout';
import {
  HomePage,
  PhonesPage,
  TabletsPage,
  AccessoriesPage,
  FavouritesPage,
  CartPage,
} from './pages';
import { store } from './store/store';
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/phones', element: <PhonesPage /> },
  { path: '/tablets', element: <TabletsPage /> },
  { path: '/accessories', element: <AccessoriesPage /> },
  { path: '/favourites', element: <FavouritesPage /> },
  { path: '/cart', element: <CartPage /> },
];

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
