import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    classNames: {
      name: "label",
      type: { name: "string", required: false },
      defaultValue: "bg-green-400",
      description: "CSS Classnames",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "bg-blue-400" },
      },
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
