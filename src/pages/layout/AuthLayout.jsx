import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';

const AuthLayout = () => {
    return (
          <div>
              <header className="w-11/12 mx-auto py-4">
         <Navbar></Navbar>
          </header>
          <main className="w-11/12 mx-auto py-5">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default AuthLayout;