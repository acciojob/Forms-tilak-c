import React, {useState} from 'react';
const FormState = () => {
    const [formData,setFormData]=useState({
        full_name:'',
        email:'',
        password:'',
        password_confirmation:''
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form data:",formData);
    }
  return (
    <div>
         <section id="form-state-link">
        <form id="info-form" onSubmit={handleSubmit}>
            <input id="full_name" type="text" placeholder='Full Name' value={formData.full_name} onChange={handleChange}/>
            <input id="email" type="email" placeholder='Email' value={formData.email} onChange={handleChange}/>
            <input id="password" type="password" placeholder='Password' value={formData.password} onChange={handleChange}/>
            <input id="password_confirmation" type="password" placeholder='Confirm Password' value={formData.password_confirmation} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
        </section>
    </div>
  )
}

export default FormState
