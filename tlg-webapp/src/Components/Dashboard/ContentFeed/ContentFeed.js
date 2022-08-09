import React from 'react'
import Header from '../Header/Header'


const ContentFeed = ()=>{
  const logged=localStorage.getItem('logged')

    return(
        <>
            <Header page='/ContentFeed'/>
        </>

    )
}

export default ContentFeed