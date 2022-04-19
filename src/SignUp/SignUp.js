import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <div className='container w-50 mx-auto py-5'>
                <h1>Sign Up</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                    </Form.Group>

                    <Button
                        variant="primary" type="submit">
                        Submit
                    </Button>
                    <Link to="/login">
                        <p>Login Now</p>
                    </Link>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;