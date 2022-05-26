import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MagicLinkValidationPage } from "./MagicLinkValidationPage";

export default {
  title: "Auth/ValidationPage",
  component: MagicLinkValidationPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MagicLinkValidationPage>;

const Template: ComponentStory<typeof MagicLinkValidationPage> = (args) => (
  <MagicLinkValidationPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
