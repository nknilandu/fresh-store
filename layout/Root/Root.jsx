import React from 'react';
import { Outlet } from 'react-router';
import Navbar from "../../component/Navbar/Navbar"
import Footer from '../../component/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#fefefe]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;