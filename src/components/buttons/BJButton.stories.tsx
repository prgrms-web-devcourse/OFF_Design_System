import { Meta, StoryObj } from "@storybook/react";
import BJButton from "./BJbutton";


const meta: Meta = {
  title: "BUTTON/bySize/BJButton",
  component: BJButton,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'] ,
      control: { type: 'select' },
    },
  },

};

export default meta;

type Story = StoryObj<typeof BJButton>;

export const Example: Story = {
  render: (args) => <BJButton  {...args}>범진 버튼 test</BJButton>,
};