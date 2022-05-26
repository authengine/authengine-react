import React from "react";
import { ClientContext } from "./ClientContext";

interface ValidationPageProps {
  children?: React.ReactNode;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

export function MagicLinkValidationPage(props: ValidationPageProps) {
  const client = React.useContext(ClientContext);
  const [error, setError] = React.useState();

  function findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substring(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }

  React.useEffect(() => {
    client.magicLink
      .loginWithToken({
        id: findGetParameter("id"),
        token: findGetParameter("token"),
      })
      .then(() => props.onSuccess())
      .catch((error) => {
        setError(error);
        props.onError(error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center w-fill h-screen bg-gray-100">
      {error && (
        <div className="p-5 w-96 bg-white shadow rounded">
          <h1 className="text-xl font-semibold">{error.message}</h1>
        </div>
      )}
    </div>
  );
}
