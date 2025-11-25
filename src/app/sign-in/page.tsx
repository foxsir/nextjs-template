'use client'

import React from "react";
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@heroui/react";

export default function Page() {
  const [password, setPassword] = React.useState("");
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // Real-time password validation
  const getPasswordError = (value) => {
    if (value.length < 4) {
      return "Password must be 4 characters or more";
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return "Password needs at least 1 uppercase letter";
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return "Password needs at least 1 symbol";
    }

    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {};

    // Password validation
    const passwordError = getPasswordError(data.password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({terms: "Please accept the terms"});

      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          登录账号
        </h2>
      </div>

      <div className="mt-10">
        <Form
          className="w-full justify-center items-center space-y-4"
          validationErrors={errors}
          onReset={() => setSubmitted(null)}
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4 min-w-xl">
            <Input
              isRequired
              errorMessage={({validationDetails}) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your email";
                }
                if (validationDetails.typeMismatch) {
                  return "Please enter a valid email address";
                }
              }}
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
            />

            <Input
              isRequired
              errorMessage={getPasswordError(password)}
              isInvalid={getPasswordError(password) !== null}
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onValueChange={setPassword}
            />

            {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

            <div className="flex gap-4">
              <Button className="w-full" color="primary" type="submit">
                Submit
              </Button>
              <Button type="reset" variant="bordered">
                Reset
              </Button>
            </div>
          </div>

          {submitted && (
            <div className="text-small text-default-500 mt-4">
              Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
