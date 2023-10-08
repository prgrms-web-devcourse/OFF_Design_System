import { useState } from "react";
import JGButton from "./components/buttons/JGButton";
import Textarea from "./components/textarea/Textarea";
import ImageUploader from "./components/uploads/ImageUploader";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <JGButton>jgjgill</JGButton>
      <ImageUploader />
      <span>Value: {value}</span>
      <Textarea
        placeholder="Here is a sample placeholder"
        onChange={(e) => setValue(e.target.value)}
        resize="vertical"
        size="small"
      />
    </>
  );
}

export default App;
