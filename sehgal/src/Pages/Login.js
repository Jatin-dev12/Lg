import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import {  useNavigate } from 'react-router-dom'
import '../Pages/Login.css';
import { Form} from "react-bootstrap";
import Lg from '../Images/Admin.jpg'
import './Sabki.css'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [validateErrors, setValidateErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const storeUserDataInSession = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
      };
       
    const onLogin = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setValidateErrors({});
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/user")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setValidateErrors("Please enter correct Username & Password");
        });
      };
      
    return(
        <>
          <div className="container">
           <div className="row">
            <div className="col-md-6">
            <img
            src={Lg}
            alt="Login "
            className="user"
          />
        </div>
        <div className="col-md-6">
          <h2> User Login</h2>
          <form onSubmit={(e) => onLogin(e)}>
          {Object.keys(validateErrors).length !== 0 &&
                            <Form.Text className="text-danger">Invalid Email or Password.</Form.Text>
                        }
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={onLogin} type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          {error && <p className="error">Invalid Email or Password</p>}
        </div>
      </div>
    </div>
        </>
    )
}
 
export default Login;

