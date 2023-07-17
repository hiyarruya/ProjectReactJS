import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (name, password) => {
    //     //reqres registered sample user
    //     const loginPayload = {
    //       email: 'eve.holt@reqres.in',
    //       password: 'cityslicka'
    //     }
      
    //     axios.post("https://reqres.in/api/login", loginPayload)
    //       .then(response => {
    //         //get token from response
    //         const token  =  response.data.token;
      
    //         //set JWT token to local
    //         localStorage.setItem("token", token);
      
    //         //set token to axios common header
    //         setAuthToken(token);
      
    //  //redirect user to home page
    //         window.location.href = '/'
    //       })
    //       .catch(err => console.log(err));
    //   };
    return (
    <div className='login'>
        <form className='login__form'>
            <h1>Login</h1>
            <input type='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit' className='btn__submit' >Submit</button>
        </form>
    </div>
  )
}

export default Login