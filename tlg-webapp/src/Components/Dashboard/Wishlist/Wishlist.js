import React from 'react'
import Header from '../Header/Header'


const Wishlist = ()=>{
  const logged=localStorage.getItem('logged')

    return(
        <>
            <Header page='/Wishlist'/>
        </>

    )
}

export default Wishlist