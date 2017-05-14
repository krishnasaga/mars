import React from 'react';
import Header from 'Layout/Header';
import Footer from 'Layout/Footer';
import Navbar from 'Layout/Navbar';

const Layout = (props) => {
    return (
        <div>
          <Header><Navbar/></Header>
          <div>{ props.children }</div>
          <Footer></Footer>
        </div>
    );
};

export default Layout;
