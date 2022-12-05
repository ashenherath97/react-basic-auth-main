import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import bg from './img/bg.jpg';
import {Form, Button, Input} from "antd";
import './css/Login.css';

function Login() {
  
  const navigate = useNavigate();

  function handleClick(){
    navigate("/Dashboard")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  
  return (
    <div style={{ backgroundImage:`url(${bg})` ,width:'100%', height:'auto'}}>
    <div className="login">
      
      <header className="login-header">

        <div className="login-form">
          <h3 className='form-title'>Login</h3>

          <Form layout='vertical'>

            <Form.Item  name='email' label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder='Please input your email!' value={email} onChange={(e) => setEmail(e.target.value)}></Input>
            </Form.Item>

            <Form.Item name='password' label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password placeholder='Please input your password!' value={password} onChange={(e) => setPassword(e.target.value)}></Input.Password>
            </Form.Item>

            <Form.Item name='login'>
                <Button onClick={(e) => handleClick()} block type='primary' htmlType='submit'><strong>Login</strong></Button>
            </Form.Item>

          </Form>

        </div>
      </header>
    
    </div>
    </div>
  )
}

export default Login;