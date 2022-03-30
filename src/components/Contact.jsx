import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {

  const { 
    register,
    handleSubmit,
    required,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = (data) => {

  console.log(data);
        
      reset();
      toastifySuccess();
    

  };

    return (
        <>
            <div className="card contact-card">
            <img src="./assets/bg.jpg" alt='background' className='bg-image contact'/>
    <div className=" contact-form card-img-overlay d-flex flex-column justify-content-center">
      <form className='bg-light p-4 mx-auto rounded' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="row mb-3 mt-1 px-2">
          <div className="col-md mb-3">
            <label htmlFor="first-name" className="form-label">First name</label>
            <input className="form-control" 
                    type="text" 
                    name="firstname" 
                    id="first-name" 
                    required
                    {...register('firstname', {
                      required: { 
                        value: true, 
                        message: 'Please enter your first name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })} />
                     {errors.firstname && (<span  
                          className='error-message text-danger'>
                            {errors.firstname.message}</span>)}
          </div>
          <div className="col-md">
            <label htmlFor="last-name" className="form-label">Last name</label>
            <input className="form-control" 
                  name="last-name" 
                  type="text" 
                  id="last-name" 
                  required
                  {...register('lastname', {
                    required: { 
                      value: true, 
                      message: 'Please enter your last name' },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })} />
                  {errors.lastname && (<span  
                          className='error-message text-danger'>
                            {errors.lastname.message}</span>)}
          </div>
        </div>
        <div className="row mt-3 px-2">
          <div className="col-md mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input className="form-control" 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    />
                    {errors.email && (<span 
                                  className='error-message text-danger'>
                                    Please enter a valid email address</span>)}
          </div>
          <div className="col">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input className="form-control" 
                   type="text" 
                   id="subject" 
                   name="subject" 
                   required
                   {...register('subject', {
                    required: {
                      value: true,
                      message: 'Please enter a subject' },
                    maxLength: {
                      value: 75,
                      message: 'Subject can not exceed 75 characters'
                    }
                  })}/>
                  {errors.subject && (<span  
                          className='error-message text-danger'>
                            {errors.subject.message}</span>)}
          </div>
        </div>
        <div className="row mt-3 px-2">
          <div className="col">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" 
                      name="message" 
                      rows="4" id="message" 
                      {...register('message', {
                        required: true
                      })}
                      required></textarea>
                      {errors.message && (<span  
                          className='error-message text-danger'>
                            Please enter a message</span>)}
          </div>
        </div>
        <div className="d-flex justify-content-center pt-3 mt-3
        ">
          <button type="submit" className="min-width-25 btn btn-primary">Submit</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  </div>
        </>
    );
};

export default Contact;