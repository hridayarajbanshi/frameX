import React from 'react'
import './index.css'
import Navbar from "../Components/Navbar"
import Search from "../Components/searchField"
import Images from "../Components/Images"
import useAxios from "../Hooks/useAxios"
function App() {
const {response, isLoading, error, fetchData} =
 useAxios(`search/photos?page=1&query=office&client_id=${import.meta.env.REACT_APP_UNSPLASH_KEY}`);

console.log(response);
  return (
   

    <>
     {console.log(import.meta.env)}
    <Navbar></Navbar>
    <Search></Search>
    <Images></Images>
  </>
  )
}

export default App
