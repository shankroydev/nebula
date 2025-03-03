import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Header: Story = {
  args: {
    buttonType: "header",
    children: "Case Studies",
  },
};

export const MediumContained: Story = {
  args: {
    buttonType: "mediumContained",
    children: "Get a free trial",
    btnTextColor: "black",
  },
};

export const Medium: Story = {
  args: {
    buttonType: "medium",
    children: "Book a demo call",
    btnTextColor: "white",
  },
};