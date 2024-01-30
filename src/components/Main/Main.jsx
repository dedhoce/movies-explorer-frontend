import Promo from './Promo/Promo'
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';

export default function Main() {
  return (
    <>      
      <Promo />   
      <NavTab /> 
      <AboutProject />
      <Techs />
      <Portfolio />      
    </>
  );
}
