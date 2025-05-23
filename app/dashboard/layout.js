import React from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';

function layout({ children }) {
  return (
    <div>
      {/* Sidebar */}
      <div className="w-64 fixed hidden md:block">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="md:ml-64">
        <Header/>

        {children}
      </div>
    </div>
  );
}

export default layout;
