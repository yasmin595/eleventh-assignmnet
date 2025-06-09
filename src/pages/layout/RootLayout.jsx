import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Home from '../home/Home';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Loading from '../shared/Loading';

const RootLayout = () => {
      const {state } = useNavigation();
    return (
        <div>
         <Navbar></Navbar>
               <div className='max-w-7xl mx-auto'>
            {state == "loading"? <Loading></Loading> : <Outlet></Outlet> } 
         </div>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;