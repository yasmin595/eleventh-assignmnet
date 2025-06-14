import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Home from '../home/Home';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Loading from '../shared/Loading';
import { TabTitle } from '../../utils/General';

const RootLayout = () => {
       TabTitle('WhereIsIt')
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