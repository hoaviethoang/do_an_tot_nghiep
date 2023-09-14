import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="main">
      <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/" className="link" >
                  <li className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon"/>
                    Home
                </li>
                </Link>
              </ul>
            </div>
          </div>
      </div>
      <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
              <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <PermIdentityIcon className="sidebarIcon"/>
                    Users
                </li>
              </Link>
              {/* <Link to="/newUser" className="link"> 
                <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon"/>
                New Users
                </li>
                </Link> */}
                <Link to="/products" className="link">
                <li className="sidebarListItem" >
                  <Inventory2Icon className="sidebarIcon"/>
                    Products
                </li>
                </Link>
                <Link to="/newproduct" className="link">
                <li className="sidebarListItem">
                <Inventory2Icon className="sidebarIcon"/>
                   New  Product
                </li>
                </Link>
                
                
                
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}
