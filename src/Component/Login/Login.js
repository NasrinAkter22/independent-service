import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../Banner/Loading/Loading';
import auth from '../Firebase';

const Login = () => {

    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);

    if (loading) {
        return <Loading />
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const passowrd = passwordRef.current.value;

        signInWithEmailAndPassword(email, passowrd)



    }
    return (
        <div>
            <div className='container w-50 mx-auto py-5'>
                <h1>Login</h1>
                <Form onSubmit={submitHandler}>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
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

export default Login;
