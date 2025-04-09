import { Outlet } from 'react-router-dom';
import { Header, Footer } from './index';
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
