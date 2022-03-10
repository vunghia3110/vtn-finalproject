import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import SideBar from './Sidebar';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { openMenu } from '../../users/redux/usersReducer'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    console.log(menuOpened)
    menuOpened ? setMenuOpened(false):setMenuOpened(true)
  }
  const css = `
    .header-icon {
      font-size: 20px;
      opacity: 0.6;
    }
    .header-icon:hover {
      opacity: 1400;
    }
  `;
  return (
    <div style={{zIndex: 2000}}>
      <div
        className="shadow-lg"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'var(--white)',
          backgroundColor: 'var(--header)',
          padding: '20px 25px',
        }}
      >
        <style>{css}</style>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AiOutlineMenu className="header-icon" style={{ marginRight: '10px' }} onClick={toggleMenu} />
          <div style={{ position: 'relative' }}>
            <h1 style={{ fontSize: '30px', marginBottom: '0' }}>Gear Focus Admin</h1>
            <AiOutlineBell
              style={{ position: 'absolute', top: '10px', right: '-16px', fontSize: '18px', fontWeight: 800 }}
            />
          </div>
        </div>
        <AiOutlineUser className="header-icon" style={{}} />
      </div>
    </div>
  );
};

export default Header;
