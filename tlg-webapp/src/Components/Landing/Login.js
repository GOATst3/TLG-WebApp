import { useState} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../Utils/utils.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Modals(props) {

    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')  //classic email rules
    const validPassword =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")  //at least 1 uppercase, 1 lowercase, 1 number, 8 character minimum
    
    const [loginData, setLoginData]=useState({
        email:'',
        password:'',
    })

    //storing strings in the state
    const onChangeLogin=(event)=>{
        setLoginData(
            {
                ...loginData,
                [event.target.name]:event.target.value.trim()   //it will change loginData.(name of target) 
            }
        )
    }

    //handling submit
    const HandleLogin=(e)=>{
        const email=document.getElementById('email')
        const password= document.getElementById('password')

        if(!validPassword.test(loginData.password) && !validEmail.test(loginData.email)){
            email.style.border = "2px solid red"
            password.style.border = "2px solid red";
            alert('Invalid email and password')
        }
        else if (!validEmail.test(loginData.email)){
            email.style.border = "2px solid red";
            alert('Invalid email')
        }
        else if (!validPassword.test(loginData.password)){
            password.style.border = "2px solid red";
            alert('Invalid password')
        }
        else {
            localStorage.setItem('logged', true)
            window.location.reload()
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{backgroundColor :'var(--dark)'}}
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
                You must be logged to access this page
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
  
                {/* email */}
                <Row className='justify-content-center mb-4'>
                    <Col sm={10}>
                        <input
                        id='email'
                        name={'email'}
                        type={'text'}
                        placeholder={'Email'}
                        required
                        style={{width:'100%'}}
                        onChange={onChangeLogin}
                    />
                    </Col>
                </Row>

                {/* password */}
                <Row className='justify-content-center mb-4'>
                    <Col sm={10}>
                        <input
                        id='password'
                        name='password'
                        type={'password'}
                        placeholder={'Password'}
                        style={{width:'100%'}}
                        onChange={onChangeLogin}
                        />
                    </Col>
                </Row>

                {/* submit button */}
                <Row className='justify-content-between'>
                    <Col sm={3} className='d-flex justify-content-end'>
                    <a href = '/WorkInProgress'>Forgot Password</a>
                    </Col>
                    <Col sm={3} className='d-flex justify-content-center'>
                        <Button  type='button' id='submit' onClick={()=>HandleLogin()}>Login</Button>
                    </Col>
                </Row>

            </form>
        </Modal.Body>


        <Modal.Footer>
            Not registered yet? <Button className='ms-5' onClick={ ()=>window.location.href = '/WorkInProgress'}>Signup</Button>
        </Modal.Footer>
        </Modal>
    );
}

