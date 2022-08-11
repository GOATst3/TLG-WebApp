import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import './header.css'
import list from '../../../Assets/list.svg'
import logo from '../../../Assets/alogo-2.png'
import { Button, Offcanvas } from "react-bootstrap";

const Header=(props)=>{

    const logout=()=>{
        localStorage.removeItem('logged')
        window.location.reload()
    }

    const[show,setShow]=useState(false)

    return(
        <Nav variant="pills" defaultActiveKey={props.page} className={'justify-content-between'}>
            
            {/*logo*/}
            <div>
                <Nav.Item className="mx-3 align-items-center">
                    <img src={logo} alt='logo' style={{height:'60px'}}/>
                </Nav.Item>
            </div>

            {/* button for offcanvas,visible only under md breakpoint */}
            <Nav.Item className='d-md-none m-3' onClick={()=>setShow(true)}>
                <img src={list} style={{width:'30px'}} alt='menu'/>
            </Nav.Item>

            {/* Offcanvas */}
            <Offcanvas className='d-md-none' placement='end' backdrop={false} show={show} onHide={()=>setShow(false)}>
                <Offcanvas.Header closeButton/>
        
                <Offcanvas.Body>
                    <Nav variant="pills" defaultActiveKey={props.page} className={'flex-column justify-content-end'}>

                        {/*links*/}
                        <Nav.Item>
                            <Nav.Link href="/ContentFeed">Content Feed</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/ContactMe">Contact Me</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/Wishlist">Wishlist</Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="text-end mt-5" >
                            <Button variant="danger" onClick={logout}>LogOut</Button>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>


            {/*links*/}
            <div className="d-none d-md-flex align-items-center">
                <Nav.Item>
                    <Nav.Link href="/ContentFeed">Content Feed</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/ContactMe">Contact Me</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/Wishlist">Wishlist</Nav.Link>
                </Nav.Item>

            </div>
            
            {/* logout button */}
            <div className="mx-3 d-md-flex d-none align-items-center">
                <Nav.Item className="align-items-center" >
                    <Button variant="danger" onClick={logout}>LogOut</Button>
                </Nav.Item>

            </div>
        </Nav>
    )

}

export default Header