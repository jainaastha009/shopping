
import React from 'react'

const FormSelect = ({label,name,list,defaultvalue,size}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='capitalize label-text text-[#f54949]'>{label}</span>
      </label>
      <select
       name={name}
        id={name} 
        className={`select select-bordered ${size}`}
      defaultValue={defaultvalue}>
        {list.map((i)=>{
        return(
            <option key={i} value={i}>
                {i}
            </option>
        )
      })}
      </select>
    </div>
  )
}

export default FormSelect
