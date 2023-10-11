import JGButton from './components/buttons/JGButton';
import Input from './components/input/Input';
import ImageUploader from './components/uploads/ImageUploader/ImageUploader';

function App() {
  return (
    <>
      <JGButton>jgjgill</JGButton>
      <ImageUploader></ImageUploader>
      <Input
        inputLabel='ID'
        type='text'
        placeholder='아이디'
        style={{ color: 'blue' }}
      />
      <Input inputLabel='PASSWORD' type='password' placeholder='비밀번호' />
    </>
  );
}

export default App;
