import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SessionManager } from "./SessionManager";

export default {
  title: "User/SessionManager",
  component: SessionManager,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SessionManager>;

const Template: ComponentStory<typeof SessionManager> = (args) => (
  <div style={{ maxWidth: "700px" }}>
    <SessionManager {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
