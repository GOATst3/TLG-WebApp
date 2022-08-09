import React from "react"
import '../../Utils/utils.css'
import Header from "../Dashboard/Header/Header"
const WorkInProgress= ()=>{

  return(
    <>
      <Header/>
      <div style={{backgroundColor:'var(--dark)',height:'100vh'}}>
        <h1 style={{height:'100%',textAlign:'center', paddingTop:'20%', color:'white'}}>Work In Progress... </h1>
      </div>
    </>
  )
}
export default WorkInProgress
