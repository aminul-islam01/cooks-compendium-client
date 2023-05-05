import React, { useContext, useState } from 'react';
import './Login.css'
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const {loginUser, handleGoogleSignIn,  handleGithubSignIn, handleResetPassword} = useContext(UserContext);
    const Navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // console.log(location)
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((result) => {
            const loggedUser = result.user;
            form.reset();
            Navigate(from, {replace: true});
            Swal.fire({
                // position: 'top-center',
                icon: 'success',
                title: 'Login successfull',
                showConfirmButton: false,
                timer: 1500
            })
          })
          .catch((error) => {
            const errorMessage = error.message;
           setError(errorMessage)
          });
        
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className='bg-light pb-5'>
            <Row xs={1} md={2} lg={3}>
                <Form onSubmit={handleLogin} className='mx-auto mt-5 rounded shadow p-5' style={{background:"white"}}>
                    <h4 className='fw-bold text-center py-3'>Login your account</h4>
                    <hr />
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control type='email' name='email' placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>Password</Form.Label>
                        <Form.Control 
                        type={showPassword?'text':'password'}
                        name='password' 
                        placeholder="Enter your password" />
                        {showPassword?<FaEyeSlash onClick={handleShowPassword} className='eye'></FaEyeSlash>
                        :<FaEye onClick={handleShowPassword} className='eye'></FaEye>}
                    </Form.Group>
                    <p className='text-danger mt-1'>{error}</p>
                    <Button className='w-100' variant="dark" type="submit">Login</Button>
                    <p className='text-center mt-3'>Forget Password? Please <Link onClick={handleResetPassword}>Reset Password</Link></p>
                    <p className='text-center mt-3 mb-5'>Don't have an account? <Link to="/register">Register</Link></p>
                    <Button onClick={()=>handleGoogleSignIn(from, Navigate)} className='w-100 mb-3' variant="outline-info" type="submit"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button onClick={()=>handleGithubSignIn(from, Navigate)} className='w-100' variant="outline-dark" type="submit"><FaGithub></FaGithub> Login With Github</Button>
                </Form>
            </Row>
        </div>
    );
};

export default Login;