import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CustomMenu from './custumMenu'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import '../basic.scss'
let navLinks =['Stay','Learn','Shop','About']
export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className='navbar'>
          <h2><Link to='/'>JZ Farms 👨🏻‍🌾</Link></h2>
          {navLinks.map((link,i)=>{ return  <Link key={i} to={link}>{link}</Link>})}
          {/* <IconButton edge="start"  aria-label="menu"> */}
          {/* <CustomMenu/> */}
          {/* </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}