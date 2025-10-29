import React from 'react'
const Form = () => {
  return (
    <div>
        <section id="form-link">
        <form id="info-form">
            <input id="full_name" type="text" placeholder='Full Name'/>
            <input id="email" type="email" placeholder='Email'/>
            <input id="password" type="password" placeholder='Password'/>
            <input id="password_confirmation" type="password" placeholder='Confirm Password'/>
            <button type="submit">Submit</button>
        </form>
        </section>
    </div>
  )
}

export default Form;