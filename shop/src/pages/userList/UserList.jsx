import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import { deleteUser } from "../../redux/apiCalls";
export default function UserList() {
  
  const dispatch = useDispatch();
  const [users,setUsers]=useState([])

  const handleDelete = (_id) => {
    deleteUser(_id, dispatch)&& window.location.replace("/users")
    alert("xoa thanh cong");
    console.log( deleteUser(_id, dispatch))
  };

  useEffect(()=>{
    const getUsers = async()=>{
      try {
        const res = await userRequest.get('/users');
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  },[])
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row?.img ? params.row.img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VeVHSV-OV1ATnG7fcc-mCk06DEEfteHT5Q&usqp=CAU" } alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    
    {
      field: "isAdmin",
      headerName: "is Admin",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}