import React from 'react'
import Header from '../Header/Header'


const ContactMe = ()=>{
  const logged=localStorage.getItem('logged')

    return(
        <>
            <Header page={'/ContactMe'}/>
        </>

    )
}

export default ContactMe