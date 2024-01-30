import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useLocation } from 'react-router-dom';

const pathname = [
  '/', 
  '/movies',
  '/saved-movies'
]

const Layout = ({ isLogin }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/profile' ||
      pathname.includes(location.pathname) ? (
        <Header isLogin={isLogin} />
      ) : (
        <></>
      )}
      <main>
        <Outlet />
      </main>
      {pathname.includes(location.pathname) ? (
        <Footer />
      ) : (
        <></>
      )}
    </>
  );
};

export { Layout };
