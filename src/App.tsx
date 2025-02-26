import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import {
  HomePage,
  PhonesPage,
  TabletsPage,
  AccessoriesPage,
  FavouritesPage,
  CartPage,
} from './pages';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
