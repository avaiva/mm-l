import './App.css';
import CardTimeline from './components/CardTimeline';
import CardToday from './components/CardToday';
import InputField from './components/InputField';
import TextArea from './components/TextArea';
import ButtonForm from './components/ButtonForm';
import ButtonApp from './components/ButtonApp';
import ButtonIcon from './components/ButtonIconEdit';
import ButtonIconDelete from './components/ButtonIconDelete';
import ButtonIconEdit from './components/ButtonIconEdit';

function App() {
  return (
    <>
      {/* <InputField label="name" type="text" placeholder="Some text" value="name" />
      <TextArea /> */}

      {/* <CardToday />
      <CardToday />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline />
      <CardTimeline /> 
        */}
      <ButtonForm navigate="/signup" label="Sign Up" classCss={'btn-grey'} />
      <ButtonForm navigate="/login" label="Login" classCss={'btn-white'} />
      <ButtonApp navigate="/edit-gratitude" label="My Gratitude" type={'submit'} />
      <ButtonApp navigate="/edit-gratitude" label="Edit" classCss={'btn-pocketsize'} type={'submit'} />
      <ButtonIconDelete label={' Delete Account'} />
      <ButtonIconEdit />
    </>
  );
}

export default App;
