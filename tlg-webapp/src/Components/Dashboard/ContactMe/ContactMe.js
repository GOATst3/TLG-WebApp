import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Header from '../Header/Header'
import './contactme.css'


const ContactMe = ()=>{

    const contacted = localStorage.getItem('contacted')
    
    const [data,setData]=useState({
        firstname:'',
        lastname:'',
        email: '',
        subject: 'Opt1',
        text:'',
        privacy : true
    })

    //storing strings in the state
    const onChangeData=(event)=>{
        if(event.target.name==='privacy'){
            setData({
                ...data,
                privacy : event.target.checked
            })
        }
        else setData(
            {
                ...data,
                [event.target.name]:event.target.value.trim()   //it will change data.(name of target) 
            }
        )
    }
    
    
    const sendData=(e)=>{
        e.preventDefault()
        if (data.firstname.length<1||data.length<1||data.length<1||data.length<1){
            alert('every fields must be filled')
        }
        else{
            const dataJson = JSON.stringify(data)
            console.log(dataJson);
            localStorage.setItem('contacted',true)
            window.location.reload()
        }
    }

    return(
        <>
            <Header page={'/ContactMe'}/>

            
            <div 
            className='d-flex justify-content-center align-items-center'
            id='page-content'
            >
                <div
                className='w-75 h-75 p-5 rounded-4 bg-white my-5'
                id='central-box'
                >

                <div className='border-bottom'>
                    <h1>Contact Me!</h1>
                </div>

                <div>
                    <form>
                        <Row className='justify-content-around my-md-3 my-0'>
                            <Col md='6' className='mt-3 my-2 my-md-0'>
                                <input
                                type='text'
                                required
                                name='firstname'
                                placeholder='First Name'
                                style={{width:'100%'}}
                                disabled={contacted}
                                onChange={onChangeData}
                                />
                            </Col>
                            <Col md='6' className='my-2 my-md-0'>
                                <input
                                type='text'
                                required
                                name='lastname'
                                placeholder='Last Name'
                                style={{width:'100%'}}
                                disabled={contacted}
                                onChange={onChangeData}
                                />
                            </Col>
                        </Row>

                        <Row className='justify-content-around my-md-3 my-0'>
                            <Col md='6' className='my-2 my-md-0'>
                                <input
                                type='email'
                                required
                                name='email'
                                placeholder='Email'
                                style={{width:'100%'}}
                                disabled={contacted}
                                onChange={onChangeData}
                                />
                            </Col>
                            <Col md='6' className='my-2 my-md-0'>
                                <select
                                type='select'
                                required
                                name='subject'
                                style={{width:'100%', height:'30px'}}
                                disabled={contacted}
                                onChange={onChangeData}
                                >
                                    <option>Opt1</option>
                                    <option>Opt2</option>
                                    <option>Opt3</option>
                                    <option>Opt4</option>
                                    <option>Opt5</option>
                                </select>
                            </Col>
                        </Row>

                        <Row className='justify-content-around'>
                            <Col md='12' className='my-2'>
                                <textarea
                                className='w-100'
                                placeholder='Write a message'
                                disabled={contacted}
                                onChange={onChangeData}
                                />
                            </Col>
                        </Row>
                        
                        <Row className='justify-content-start'>
                            <Col className='d-flex align-items-center'>
                                <input
                                type='checkbox'
                                name='privacy'
                                onChange={onChangeData}
                                disabled={contacted}
                                checked={data.privacy}
                                />
                                <p id='policyp'>I Agree To The <a href='/WorkInProgress'>Privacy Policy and terms of use</a> </p>
                                
                            </Col>
                        </Row>

                        {/* submit button */}
                        <Row className='justify-content-end'>
                            <Col className='d-flex justify-content-end'>
                                {contacted&&<h2>You'll be contacted back soon</h2>}
                                {!contacted&&<Button  type='submit' disabled={!data.privacy} id='submit' onClick={sendData}>Send</Button>}
                            </Col>
                        </Row>
                    </form>
                </div>


                <Modal.Footer>
                </Modal.Footer>
                </div> 
                
            </div>
        </>

    )
}

export default ContactMe
