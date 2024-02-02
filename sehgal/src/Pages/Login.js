import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase';
import {  useNavigate } from 'react-router-dom'
import '../Pages/Login.css';
import Lg from '../Images/user.png'
 
const Login = () => {
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
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
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
 
export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Pages/Login.css';
// import Lg from '../Images/Admin.jpg'

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//     const navigate = useNavigate();
    
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (username === 'admin' && password === '123456') {
      
//         navigate('/Home');
//       } else {
//         setError(true);
//       }
//     };


//   return (
//     <>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={Lg}
//             alt="Login "
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-6">
//           <h2> Admin Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="username"
//                 className="form-control"
//                 id="username"
//                 placeholder="Enter name"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </form>
//           <p className="forgot-password text-right">
//             Forgot <a href="/">password?</a>
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;