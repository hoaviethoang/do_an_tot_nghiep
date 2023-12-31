import "./widgetSm.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
export default function WidgetSm() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async() =>{
     try{
      const res =await  userRequest.get("users/?new=true");
      setUsers(res.data)
     }catch{

     }
    }
    getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(       
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VeVHSV-OV1ATnG7fcc-mCk06DEEfteHT5Q&usqp=CAU"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
         ))}
      </ul>
    </div>
  );
}