import Header from '../Header/Header';
import ProfileForm from './ProfileForm/ProfileForm';

export default function Profile({isLogin}) {
  return (
    <>
      <Header isLogin={isLogin} />
      <ProfileForm />
    </>
  );
}
