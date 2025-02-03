import React from 'react'

const PaginatioinContainer = ({currentPage,handleNextPage,handlePrevPage,totalPages,handlePageChange}) => {
  return (
    <div className='pagination-container'>
        <button disabled={currentPage===0} className='page-number' onClick={handlePrevPage}>⬅️</button>
        {[...Array(totalPages).keys().map(
          (p)=><button
          onClick={()=>handlePageChange(p)}
          className={'page-number'+(p===currentPage?'active':'')}>{p+1}</button>
        )]}
        <button disabled={currentPage===totalPages-1} className='page-number' onClick={handleNextPage}>➡️</button>
    </div>
  )
}

export default PaginatioinContainer