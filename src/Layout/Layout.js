import React from 'react';
import 'Layout/Header';
import 'Layout/Footer';

const Layout = (props) => {
    return (
        <div>
          <Header></Header>
          <div>{ props.children }</div>
          <Footer></Footer>
        </div>
    );
};

export default Layout;
