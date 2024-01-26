import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ isLogin }) => {
  return (
    <>
      <Header isLogin={isLogin}/>
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
