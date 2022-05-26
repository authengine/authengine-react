import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Authenticator } from "./Authenticator";

export default {
  title: "Auth/Authenticator",
  component: Authenticator,
  argTypes: {},
} as ComponentMeta<typeof Authenticator>;

const Template: ComponentStory<typeof Authenticator> = (args) => (
  <Authenticator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Authengine Authenticator",
  callbackUrl:
    "http://localhost:6006/?path=/story/auth-validationpage--default",
};
