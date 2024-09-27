import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
 const error = useRouteError();
 return <h4 className='text-3xl font-bold'>There Was an Error....</h4>
}

export default ErrorElement
