import React from 'react'
import Header from '../Header/Header'
import '../../../Utils/utils.css'


const ContentFeed = ()=>{
  const logged=localStorage.getItem('logged')

    return(
        <>
            <Header page='/ContentFeed'/>
            <div style={{backgroundColor:'var(--dark)', height:'150vh'}}></div>
        </>

    )
}

export default ContentFeed