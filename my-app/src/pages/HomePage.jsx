import React from 'react';
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Widget from './Widget';

const HomePage = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className='home-container' >
            <NavBar/>

            <div className='widgets' >
              <Widget type="user" />
              <Widget type="order" />
              <Widget type="earning" />
              <Widget type="balance" />
            </div>

            <div className='charts' >
              <Featured/>
              <Chart/>
            </div>

        </div>
    </div>
  )
}

export default HomePage