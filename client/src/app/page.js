import NavBar from "./components/nav";
import List from "./components/list";
import React, { Suspense } from 'react';


export default function Main () {
  return (
    <>
      <NavBar 
      btnName={"list"}
      btnUrl={"/list"}
      />  
      <List />
    </>
  )
}