import React from "react";

import "../src/styles/index.css";

import { AuthengineProvider } from "../src/components/Provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AuthengineProvider apiUrl="http://localhost:8000/v1" publicKey="demo">
      <div className="p-1 lg:p-10">
        <Story />
      </div>
    </AuthengineProvider>
  ),
];
