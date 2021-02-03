import React, { useState, useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //get signup function from created AuthContext
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("");
      setLoading(true);
      // signup function
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError("Failed to create an account...");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Passwrod</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" required ref={passwordConfirmRef} />
            </Form.Group>

            <Button type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </>
  );
};

export default Signup;
