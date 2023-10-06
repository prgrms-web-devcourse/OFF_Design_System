import JGButton from "./components/buttons/JGButton";
import Avatar from "./components/common/Avatar/Avatar";
import ImageUploader from "./components/uploads/ImageUploader";

function App() {
  return (
    <>
      <JGButton>jgjgill</JGButton>
      <ImageUploader></ImageUploader>
      <Avatar src="https://picsum.photos/200/200" text="닉네임" subText="안녕하세요."></Avatar>
    </>
  );
}

export default App;
