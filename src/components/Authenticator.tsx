import React from "react";

import { Field, Form, Formik } from "formik";
import { useAuthengine } from "../hooks/useAuthengine";

interface AuthenticatorProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  imgSrc?: string;
  callbackUrl: string;
}

export function Authenticator(props: AuthenticatorProps) {
  const { client } = useAuthengine();

  const [success, setSuccess] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const rootRef = React.createRef<HTMLDivElement>();

  return (
    <div
      className={`p-2 md:p-8 w-full md:w-96 md:bg-white md:border md:shadow md:rounded ${props.className}`}
      ref={rootRef}
      style={props.style}
    >
      {props.imgSrc && (
        <img className="w-max-full h-20 mx-auto mb-5" src={props.imgSrc} />
      )}
      <h1 className="text-xl font-semibold text-center mb-2">
        {props.title || "Welcome to Airbnb"}
      </h1>
      <p className="text-md text-center mb-8">Log in to continue</p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values) => {
          console.log("client", client);
          client.magicLink
            .send({ email: values.email, callbackUrl: props.callbackUrl })
            .then(() => {
              setSuccess(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({ handleChange, values }) => (
          <Form>
            <Field
              name="email"
              className="py-2 px-4 border w-full rounded mb-5"
              type="email"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="p-2 border w-full rounded bg-gray-600 hover:bg-gray-500 text-white"
            >
              Continue with email
            </button>
          </Form>
        )}
      </Formik>
      {success && (
        <div className="p-4 bg-green-100 rounded mt-5">
          <p className="text-md font-semibold text-green-900 mb-2">
            Magic link sent to your email
          </p>
          <p className="text-sm text-green-900">
            Please check your email and click the link to sign in. It expires in
            15 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
