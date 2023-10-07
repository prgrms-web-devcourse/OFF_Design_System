import JGButton from './components/buttons/JGButton';
import Input from './components/input/Input';
import ImageUploader from './components/uploads/ImageUploader/ImageUploader';

function App() {
  return (
    <>
      <JGButton>jgjgill</JGButton>
      <ImageUploader></ImageUploader>
      <Input />
      <Input inputName='PASSWORD' inputType='password' placeholder='비밀번호' />
    </>
  );
}

export default App;
