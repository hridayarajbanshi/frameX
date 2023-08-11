import React from 'react'
export default function searchField() {
  return (
    <>
    <div className="searchField container">
      <h1 className='text-2xl font-bold font-sans'>Find Images</h1>
      <div className="searchFieldInput">
        <input type="text" placeholder="Search for images" className="searchFieldInputField mt-4 p-2 focus:border-none"/>
        <button className=' bg-amber-500 p-2  text-white'>Search</button>
        </div>
      </div>
    </>
    )
}