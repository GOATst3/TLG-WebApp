import React from "react";
import Nav from 'react-bootstrap/Nav';
import './header.css'
import logo from '../../../Assets/alogo-2.png'
import { Button } from "react-bootstrap";

const Header=(props)=>{

    const logout=()=>{
        localStorage.removeItem('logged')
        window.location.reload()
    }

    return(
        <Nav variant="pills" defaultActiveKey={props.page} className={'justify-content-between'}>
            
            <div className="mx-3 align-items-center">
                <Nav.Item className="mx-3 align-items-center">
                    <img src={logo} style={{height:'60px'}}/>
                </Nav.Item>
            </div>

            {/*links*/}
            <div className="d-flex align-items-center">
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
            
            <div className="mx-3 d-flex align-items-center">
                <Nav.Item className="align-items-center" >
                    <Button variant="danger" onClick={logout}>LogOut</Button>
                </Nav.Item>

            </div>
        </Nav>
    )

}

export default Header