import Badge from "./components/badge/Badge";
import JGButton from "./components/buttons/JGButton";
import ImageUploader from "./components/uploads/ImageUploader/ImageUploader";

function App() {
  return (
    <>
      <JGButton>jgjgill</JGButton>
      <ImageUploader />
      <Badge variant="solid" colorScheme="primary">
        Badge
      </Badge>
    </>
  );
}

export default App;
