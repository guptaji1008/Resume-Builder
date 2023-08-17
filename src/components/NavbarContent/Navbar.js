import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
      <AppBar sx={{backgroundColor: "white"}}>
        <Toolbar sx={{marginLeft: "auto", marginRight: "5vw"}}>
            <Link className='logo' to="/resumetemplates">MY RESUMER'Z</Link>
            <Link to="/resumetemplates">RESUME TEMPLATES</Link>
            <Link to="/aboutme">ABOUT US</Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
