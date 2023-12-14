import PageLanding from '../components/PageLanding';
import ButtonForm from '../components/ButtonForm';
import './LandingPage.css';
import BlurColorHighlight from '../components/BlurColorHighlight';
import ButtonIcon from '../components/ButtonIcon';
import ButtonSave from '../components/ButtonSave';

export default function LandingPage() {
  return (
    <>
      <PageLanding />
      <BlurColorHighlight position={{ top: '30%', right: '10%' }} size="300px" filter="blur(50px)" />
      <BlurColorHighlight position={{ top: '0%', right: '10%' }} size="100px" filter="blur(50px)" />
      <div className="landing-page-h1">
        <h1>Reframe your inner voices.</h1>
      </div>
      <div className="landing-page-h4">
        <h4>Practice gratitude and cherish the sunny moments of life with our app.</h4>
      </div>
      <div className="landing-page-btn">
        <ButtonForm navigate="/signup" label="Sign Up " size="lg" />
        <ButtonForm navigate="/login" label="Login " size="lg" />
  
      </div>
    </>
  );
}
