import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../Utils/utils.css'
import { Col, Row } from 'react-bootstrap';

const Wishlist = ()=>{
    
    
    //to force update of wishlist icon
    const [, updateState] = useState();
    const forceUpdate =useCallback(() => updateState({}), []);

    const [products,setProducts] = useState([])
    //to avoid multiple fetch
    const fetched=useRef(false)
    let wishlist=JSON.parse(localStorage.getItem('wishlistIDs'))


    const addToWishlistIcon=(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={'currentColor'} className="bi bi-bookmark-heart" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
        </svg>
    )
    const addToCartIcon=(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
    )

    const requestContent=()=>{
        if(fetched.current===false){
            wishlist.forEach(id => {
                fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(res=>res.json())
                    .then(json=>{
                        setProducts(old=>[...old,json])
                    })
            })
            fetched.current=true
        }
    }


    const addToWishlist=(id)=>{
        //refresh wishlist
        wishlist=JSON.parse(localStorage.getItem('wishlistIDs'))
        
        if(!wishlist.includes(id)){ 
            //if the product isn't in the wishlist
            wishlist.push(id)
            localStorage.setItem('wishlistIDs',JSON.stringify(wishlist))
        }
        else {
            //if the product is in the wishlist
            const itemToRemove = wishlist.indexOf(id)
            wishlist.splice(itemToRemove,1)
            localStorage.setItem('wishlistIDs',JSON.stringify(wishlist))
        }
    }

    const classes=(id)=>{
        if (!wishlist.includes(id)) return 'button-none wishlist-button grow-on-hover'
        else return 'button-none wishlist-button saved'
    }
    
    useEffect(()=>{
        requestContent() //request content when page's loaded 
        if (!localStorage.getItem('wishlistIDs'))localStorage.setItem('wishlistIDs',JSON.stringify([]))
    }) 
    
    
    return(
        <>
            <Header page='/Wishlist'/>
            <div style={{backgroundColor:'var(--dark)', minHeight:'92vh'}} className='p-5'>

                {wishlist.length<1 && 
                    <>
                        <h1 style={{height:'100%',textAlign:'center', paddingTop:'10%', color:'white'}}>Wishlist empty </h1>
                        <h2 style={{height:'100%',textAlign:'center',paddingBottom:'5%', color:'white'}}>Add Some Product! </h2>
                    </>
                }
                {<Row>
                    {
                    products.map((product,key)=>(
                        <Col md={4} key={key} className='mb-5'>

                            {/* bootstrap cards suck */}
                            <Card style={{height:'500px'}}>
                                <div className='p-5 d-flex justify-content-center w-100'style={{height:'250px'}}>
                                    <img src={product.image} className='mh-100 mw-100' alt={product.title}/>
                                </div>
                                <Card.Body className='border-bottom'>
                                    <h5 className='cut-text-inline'>{product.title}</h5>
                                    <div className='description cut-text'>
                                        {product.description}
                                    </div>
                                </Card.Body>
                                <div className='d-flex justify-content-between align-items-center m-3'>
                                    <button className={classes(product.id)} onClick={()=>{addToWishlist(product.id);forceUpdate()}} >
                                        {addToWishlistIcon}
                                    </button>
                                    
                                    <Button href='/WorkInProgress' className='d-flex align-items-center' variant="primary">Add to cart &nbsp;&nbsp;&nbsp; {addToCartIcon }</Button>
                                </div>
                            </Card>
                        </Col>
                        
                    ))
                    }
                </Row>}
            </div>
        </>

    )
}
export default Wishlist