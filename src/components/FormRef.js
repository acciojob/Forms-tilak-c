import React from 'react'
import {useRef} from 'react';
const FormRef = () => {
    const fullNameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const confirmPasswordRef=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Full Name ",fullNameRef.current.value);
        console.log("Email",emailRef.current.value);
        console.log("Password ",passwordRef.current.value);
        console.log("Confirm Password ",confirmPasswordRef.current.value);
    }
  return (
    <div>
        <section id="form-ref-link">
         <form id="info-form" onSubmit={handleSubmit}>
            <input id="full_name" type="text" placeholder='Full Name' ref={fullNameRef}/>
            <input id="email" type="email" placeholder='Email' ref={emailRef}/>
            <input id="password" type="password" placeholder='Password' ref={passwordRef}/>
            <input id="password_confirmation" type="password" placeholder='Confirm Password' ref={confirmPasswordRef}/>
            <button type="submit">Submit</button>
        </form>
        </section>
    </div>
  )
}

export default FormRef