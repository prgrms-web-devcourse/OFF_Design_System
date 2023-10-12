import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Example: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
};

export const Primary: Story = {
  args: { colorScheme: "primary" },
  argTypes: { variant: { table: { disable: true } } },
  render: (args) => (
    <div className="flex gap-2">
      <Badge {...args} variant="default">
        Badge
      </Badge>
      <Badge {...args} variant="outline">
        Badge
      </Badge>
      <Badge {...args} variant="solid">
        Badge
      </Badge>
    </div>
  ),
};

export const Secondary: Story = {
  args: { colorScheme: "secondary" },
  argTypes: { variant: { table: { disable: true } } },
  render: (args) => (
    <div className="flex gap-2">
      <Badge {...args} variant="default">
        Badge
      </Badge>
      <Badge {...args} variant="outline">
        Badge
      </Badge>
      <Badge {...args} variant="solid">
        Badge
      </Badge>
    </div>
  ),
};

export const Outline: Story = {
  args: { variant: "outline" },
  argTypes: { colorScheme: { table: { disable: true } } },
  render: (args) => (
    <div className="flex gap-2">
      <Badge colorScheme="primary" {...args}>
        Badge
      </Badge>
      <Badge colorScheme="secondary" {...args}>
        Badge
      </Badge>
    </div>
  ),
};

export const Solid: Story = {
  args: { variant: "solid" },
  argTypes: { colorScheme: { table: { disable: true } } },
  render: (args) => (
    <div className="flex gap-2">
      <Badge colorScheme="primary" {...args}>
        Badge
      </Badge>
      <Badge colorScheme="secondary" {...args}>
        Badge
      </Badge>
    </div>
  ),
};
