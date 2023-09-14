import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export default function Topbar() {
  const logout =(location) =>{
    localStorage.clear();
    window.location.replace("/login");;
}
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className='logo'>Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
            <NotificationsNoneIcon/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <SettingsIcon/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <LanguageIcon/>
            </div>
            <div style={{color:"teal",textDecoration:"none",fontSize:"20px"}} onClick={logout}>
               Logout </div>
            <img className='topAvatar' src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
