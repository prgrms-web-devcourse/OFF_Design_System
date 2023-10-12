import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Mocks/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: "https://picsum.photos/200/200",
    alt: "image",
    size: 100,
    shape: "circle",
    text: "닉네임",
    subText: "안녕하세요.",
    textAlign: "left",
    textPosition: "right",
  },
};

Primary.argTypes = {
  src: {
    control: {
      type: "text",
      defaultValue: "https://picsum.photos/200/200",
    },
  },
  alt: {
    control: {
      type: "text",
      defaultValue: "image",
    },
  },
  size: {
    control: {
      type: "number",
      defaultValue: 100,
    },
  },
  shape: {
    control: {
      type: "select",
      options: ["rounded", "circle", "square"],
    },
  },
  text: {
    control: {
      type: "text",
      defaultValue: "text",
    },
  },
  subText: {
    control: {
      type: "text",
      defaultValue: "subText",
    },
  },
  textAlign: {
    control: {
      type: "select",
      options: ["left", "center", "right"],
    },
  },
  textPosition: {
    control: {
      type: "select",
      options: ["top", "right", "left", "bottom"],
    },
  },
};
