import { Meta, StoryObj } from "@storybook/react";
import JGButton from "./JGButton";

const meta: Meta<typeof JGButton> = {
  title: "Mocks/JGButton",
  component: JGButton,
};

export default meta;
type Story = StoryObj<typeof JGButton>;

export const Example: Story = {
  render: () => <JGButton>jgjgill - pr test!</JGButton>,
};
