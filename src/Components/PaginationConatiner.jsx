import React from 'react'
import { useLoaderData ,useLocation,useNavigate} from 'react-router-dom'


const PaginationConatiner = () => {
  const {meta} = useLoaderData();
  console.log(meta);
  
  const {pageCount,page}=meta.pagination
  const pages= Array.from({length:pageCount},(_,i)=>{
    return i+1
  })
  const {search,pathname}=useLocation();

  const navigate=useNavigate();

  const handlePageChange =(pageNumber)=>{
   const serachParams=new URLSearchParams(search) 
   serachParams.set('page',pageNumber)   
   navigate(`${pathname}?${serachParams}`)

  }
  if(pageCount < 2) return null;
  return (
    <div className='flex justify-end mt-16'>
      <div className="join">
        <button className='btn btn-xs sm:btn-md join-item'
         onClick= {
          ()=>
          {
            let prevPage=page-1
            if(prevPage<1) prevPage = pageCount
            handlePageChange(prevPage)
          }
}>Prev</button>
        {pages.map((e)=>{
          return(
            <button
            key={e}
             onClick={()=>handlePageChange(e)}
            className={`btn btn-xs sm:btn-md border-none join-item
              ${e===page?'bg-base-300 border-base-300':''}
              `}
            >
            {e}  
            </button>
          )
        })}
      
      <button className='btn btn-xs sm:btn-md join-item' onClick={()=>{
        let nextPage=page+1
        if(nextPage > pageCount) nextPage = 1
        handlePageChange(nextPage)
      }}>
        Next
      </button>
      </div>
    </div>
  )
}

export default PaginationConatiner
