import React from 'react'
import { Link,useRouteError } from 'react-router-dom'

const Error = () => {

  const error = useRouteError();
  console.log(error);
  
  if(error.status === 404){
    return(
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className="text-center">
          <p className='font-semibold text-9xl text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7'>Sorry, we couldn't find the page you are lokking for!!</p>
        <div className="mt-10">
          <Link to='/login' className='btn btn-secondary'>
          Go Back Home
          </Link>
        </div>
        </div>        
      </main>
    )
  }

  // return (
  //   <div className='bg-slate-200 h-[100vh]'>
  //     <div className='justify-center text-3xl text-center '>
  //       <h1 className='text-[#f6b8b8] pt-60 pb-10'>ERROR</h1>
  //        <Link to='/login' className='hover:text-[rgb(176,224,238)] hover:underline-offset-2' >BACK TO LOGIN</Link>
  //     </div>
  //   </div>
  // )
}

export default Error
