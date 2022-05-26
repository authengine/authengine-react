import React from "react";
import { useAuthengine } from "../hooks/useAuthengine";

interface SessionManagerProps {
  className?: string;
  style?: React.CSSProperties;
  onRevoke?: (session) => void;
}

export function SessionManager(props: SessionManagerProps) {
  const { client, user, sessions } = useAuthengine();

  const handleHandleRevokeSession = (session) => {
    client.user.session.revoke(session.id);
    props.onRevoke(session);
  };

  return (
    <div
      className={`flex flex-col border rounded divide-y ${props.className}`}
      style={props.style}
    >
      {sessions.map((session) => (
        <div key={session.id} className="p-4 flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex-grow">
              <div className="text-sm font-semibold mb-1">{session.name}</div>
              <p className="text-xs mb-1">{session.userAgent}</p>
              <div className="text-xs">
                {session.ipAddress} -{" "}
                {new Date(session.createdAt).toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <button
                className="text-sm text-red-500"
                onClick={handleHandleRevokeSession}
              >
                Revoke
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
