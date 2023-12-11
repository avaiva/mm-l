import PageLanding from '../components/PageLanding';
import ButtonForm from '../components/ButtonForm';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <PageLanding />
      <div className="landing-page-h1">
        <h1>Be your own guru.</h1>
      </div>
      <div className="landing-page-h4">
        <h4>Practice gratitude and cherish life’s moments with ease. Our app is your personal companion.</h4>
      </div>
      <div className="landing-page-btn">
        <ButtonForm navigate="/signup" label="Sign Up" classCss={'btn-grey'} />
        <ButtonForm navigate="/login" label="Login" classCss={'btn-white'} />
      </div>
    </>
  );
}
