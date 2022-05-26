import authengine from "@authengine/js";
import React from "react";

import { ClientContext } from "./ClientContext";

interface AuthengineProviderProps {
  apiUrl: string;
  publicKey: string;
  children?: React.ReactNode;
}

export const AuthengineProvider = (props: AuthengineProviderProps) => {
  const client = new authengine.Client({
    apiUrl: props.apiUrl,
    publicKey: props.publicKey,
  });

  return (
    <ClientContext.Provider value={client}>
      {props.children}
    </ClientContext.Provider>
  );
};
