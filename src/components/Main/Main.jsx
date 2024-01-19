import Header from '../Header/Header'
import Promo from './Promo/Promo'
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';


export default function Main({isLogin}) {
  return (
    <>
      <Header /> {/*для отображение навигации передаем isLogin={isLogin} */}
      <Promo />   
      <NavTab /> 
      <AboutProject />
      <Techs />
      <Portfolio />
      <Footer />
    </>
  );
}
