import React from 'react';
import logo from '../assets/logo.png';
import Button from './Button';
import crossBtn from '../assets/crossBtn.png';
import { Link } from 'react-router-dom';

const Navbar = ({ Page }) => {
  return (
    <div className="navContainer" style={Page==="register" || Page==="congrats" ? { border: '0px' } : {}}>
      <div className="logoDiv">
        <Link to="/">
          <img src={logo} className='logo' alt="Logo" />
        </Link>
      </div>

      {Page === "homepage" ? (
        <div className='buttonDiv'>
          <Button className={"projectsBtn"} ahref={"/register"} text={"Get Projects"} />
          <Button className={"onboardBtn"} text={"Onboard Talent"} />
        </div>
      ) : (
        Page === "register" ? (
          <div style={{ border: '1px solid #CACACA', borderRadius: '50%', width: "62px", height: "62px", textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/">
              <img className='crossBtn' src={crossBtn} style={{ height: '30px', width: '30px' }} alt="Cross" />
            </Link>
          </div>
        ) : null 
      )}
    </div>
  )
}

export default Navbar;
