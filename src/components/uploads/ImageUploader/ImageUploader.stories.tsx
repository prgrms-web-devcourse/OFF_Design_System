import { Meta, StoryObj } from "@storybook/react";
import ImageUploader from "./ImageUploader";

const meta: Meta<typeof ImageUploader> = {
  title: "Uploads/ImageUploader",
  component: ImageUploader,
};

export default meta;
type Story = StoryObj<typeof ImageUploader>;

export const Primary: Story = {
  args: {
    buttonImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Riw8iKZ4n4XAI3zEc0ShoGo1S5Z-oQdRWw&usqp=CAU",
    onChange: (file) => getFileName(file),
    shape: "rounded",
    size: 200,
  },
};

Primary.argTypes = {
  buttonImg: {
    control: {
      type: "text",
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Riw8iKZ4n4XAI3zEc0ShoGo1S5Z-oQdRWw&usqp=CAU",
    },
  },
  shape: {
    control: {
      type: "select",
      options: ["rounded", "circle", "square"],
    },
  },
  size: {
    control: {
      type: "number",
      defaultValue: 200,
    },
  },
};

const getFileName = (file: FileList | null) => {
  file
    ? alert(`${file[0].name}을 선택했습니다.`)
    : alert("파일을 다시 선택해주세요요.");
};
