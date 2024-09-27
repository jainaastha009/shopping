import React from 'react';
import FormInput from '../Components/FormInput';
import SubmitBtn from '../Components/SubmitBtn';
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../Utils';

export const action = async ({ request }) => {
  const formData = await request.formData();  // Extracting form data
  const data=Object.fromEntries(formData)
  try {
    const response = await customFetch.post('/auth/local/register', data);
    return redirect('/login')
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'Please double check your credentials';
    alert(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className='grid h-screen place-items-center'>
      <Form method='post' className='flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4'>
        <h4 className='text-3xl font-bold text-center'>Register</h4>
        <FormInput
          type='text'
          label='username'
          name='username'
          defaultValue='James Smith'
        />
        <FormInput
          type='email'
          label='email'
          name='email'
          defaultValue='james@gmail.com'
        />
        <FormInput
          type='password'
          label='password'
          name='password'
          defaultValue='james@gmail.com'
        />
        <div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link to='/login' className='ml-2 capitalize link link-hover link-primary'>
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
