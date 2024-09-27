import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({text}) => {

    const navigation= useNavigation();
    const isSubmitting = navigation.state === 'submitting '

  return (
    <div>
      <button type='submit' className='w-80 btn btn-primary' disabled={isSubmitting}>
        {isSubmitting ? <>
        <span className='loading-spinner'></span>
        Sending...
        </>: text || 'Submit'}
        
        </button>
      
    </div>
  )
}

export default SubmitBtn
