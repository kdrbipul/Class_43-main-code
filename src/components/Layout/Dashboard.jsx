import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../header/Header';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <>
        <Header></Header>
        <div className='dashboard'>
            <div className='container'>
                    <NavLink className='btn btn-outline-success' to='/dashboard'>Profile</NavLink>
                    <br />
                    <NavLink className='btn btn-outline-success' to='/dashboard/services'>Services</NavLink>
                    <br />
                    <NavLink className='btn btn-outline-success' to='/dashboard/project'>Project</NavLink>
                    <br />
                    <NavLink className='btn btn-outline-success' to='/dashboard/contact'>Contact</NavLink>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
            
        </>
    );
};

export default Dashboard;