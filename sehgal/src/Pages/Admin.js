import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import {  useNavigate } from 'react-router-dom'
import '../Pages/Login.css';
import Lg from '../Images/Admin.jpg'
import './Adminpage'
 
const Admin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Adminpage")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
              setError(true);
            }
    
            console.log(errorCode, errorMessage);
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
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2> Admin Login Kar Bhai</h2>
          <form >
            <div className="form-group">
              <label htmlFor="username">Username</label>
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
 
export default Admin ;

