import React, { useState } from 'react'
import { Form, Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import FormInput from '../Components/FormInput'
import SubmitBtn from '../Components/SubmitBtn'
import { useDispatch } from 'react-redux'
import { GuestUser, loginUser } from '../Features/Users/UserSlice'
import { customFetch } from '../Utils'
import { store } from '../Store'

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // Convert FormData to an object

  try {
    const response = await customFetch.post('/auth/local', data);
    store.dispatch(loginUser(response.data));
    return null; // Indicate successful completion
  } catch (error) {
    return { error: error.message }; // Return error for the component to use
  }
};

const Login = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await customFetch.post('/auth/local', Object.fromEntries(formData));
      dispatch(loginUser(response.data));
      navigate('/')
    } catch (error) {
      setError(error.message);
    }
  };
  const guestUserLogin = () => {
    // Optionally, handle guest login logic (e.g., dispatch dummy data)
    dispatch(
      GuestUser()
    );
    navigate('/');
  };

  return (
    <section className='grid h-screen place-items-center'>
      <Form method='post' onSubmit={handleSubmit} className='flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4'>
        <h4 className='text-3xl font-bold text-center'>
          Login   
        </h4>
        
        {error && <p className="text-center text-red-500">{error}</p>} {/* Error message */}
        <FormInput
          type='text'
          label='username'
          name='username'
          required
        />
        <FormInput
          type='email'
          label='email'
          name='identifier'
          required
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          required
        />
        <div className='mt-4'>
          <SubmitBtn text='login' type='submit' />
        </div>
        <button type='button' className='btn btn-secondary btn-block' onClick={guestUserLogin}>
          Guest User
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link to='/register'
            className='ml-2 capitalize link link-hover link-primary'>
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login;
