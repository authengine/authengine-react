import React from "react";
import authengine from "@authengine/js";

import { ClientContext } from "../components/ClientContext";

export function useAuthengine() {
  const client = React.useContext(ClientContext);

  const [project, setProject] = React.useState();
  const [sessions, setSessions] = React.useState([]);
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    console.log(client);
    client.user.session.list().then((sessions) => {
      setSessions(sessions);
    });
  }, []);

  return {
    client,
    project,
    user,
    sessions,
  };
}
