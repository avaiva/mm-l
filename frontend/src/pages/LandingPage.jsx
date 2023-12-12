import PageLanding from '../components/PageLanding';
import ButtonForm from '../components/ButtonForm';
import Logo from '../../public/Logo.json';
import Lottie from 'lottie-react';
import './LandingPage.css';
import ButtonSave from '../components/ButtonSave';
import ButtonIcon from '../components/ButtonIcon';

export default function LandingPage() {
  return (
    <>
      <PageLanding />
      <div className="landing-page-h1">
        <h1>Reframe your inner voices.</h1>
      </div>
      <div className="landing-page-h4">
        <h4>Practice gratitude and cherish the sunny moments of life with our app.</h4>
      </div>
      <div className="landing-page-btn">
        {/* <Lottie animationData={Logo} /> */}
        <ButtonForm navigate="/signup" label="Sign Up " size="lg" />
        <ButtonForm navigate="/login" label="Login " size="lg" />
        <ButtonSave />
        <ButtonIcon imgSrc="../../public/delete.svg" label=" Delete account" />
        <ButtonIcon imgSrc="../../public/edit.svg" />
        <ButtonIcon imgSrc="../../public/logout.svg" />
        <ButtonIcon imgSrc="../../public/goBack.svg" />
      </div>
    </>
  );
}
