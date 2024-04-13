import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset(); // Reset form
  };

  return (
    <div className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-container">
            <form className='form-components' onSubmit={handleSubmit(onSubmit)}>
            
            <input {...register("name", { required: true })} placeholder="Name" />
            {errors.name && <span>Name is required</span>}
            
            <input {...register("email", { required: true })} placeholder="Email" />
            {errors.email && <span>Email is required</span>}

            <input {...register("phone", { required: true })} placeholder="Phone" />
            {errors.email && <span>Phone is required</span>}

            <input {...register("company", { required: true })} placeholder="Company" />
            {errors.email && <span>Company is required</span>}
            
            <textarea className='message'{...register("message", { required: true })} placeholder="Your Message" />
            {errors.message && <span>Message is required</span>}
            
            <button type="submit">Send</button>
            </form>
        </div>
    </div>
  );
}

export default ContactForm;
