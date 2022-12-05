import React from 'react'
import { useNavigate } from 'react-router-dom';
import bg from './img/bg.jpg';
import './css/Login.css';
import {Button} from "antd";

function Dashboard() {
  
    const navigate = useNavigate();

    function handleClick(){
      navigate("/")
    }
    
    return (
    <div style={{ backgroundImage:`url(${bg})` ,width:'100%', height:'auto'}}>
    <div className='login'>
        <header className="login-header">
        <div className="login-form">
          <h3 className='form-title'>Dashboard</h3>
            <Button onClick={(e) => handleClick()} block type='primary' htmlType='submit'><strong>Logout</strong></Button>
        </div>
        </header>
      </div>
    </div>
  )
}

export default Dashboard;