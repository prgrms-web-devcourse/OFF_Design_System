import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Example1: Story = {
  args: {
    src: "https://picsum.photos/200/200",
    size: 100,
    shape: "circle",
  },
};

export const Example2: Story = {
  args: {
    name: "TS",
    size: 100,
    shape: "circle",
    color: "blue",
  },
};

Example2.argTypes = {
  name: {
    control: {
      type: "text",
      defaultValue: "TS",
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
  color: {
    control: {
      type: "select",
      options: [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "white",
      ],
    },
  },
};

Example1.argTypes = {
  src: {
    control: {
      type: "text",
      defaultValue: "https://picsum.photos/200/200",
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
};
