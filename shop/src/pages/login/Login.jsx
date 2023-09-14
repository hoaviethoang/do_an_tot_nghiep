import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setError(false);
    try{
      login(dispatch, { username, password });
    }
    catch(err){
       setError(true);
    }
 
   
  };

  return (
    <div class="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px"
      }}
    >
      <form>
       <div class="inputs">
       <label>Username</label>
      <input
        style={{  width: "100%",
          padding: "12px 20px",
          margin: "8px 0",
          display: "inline-block",
          border:" 1px solid #ccc",
          borderRadius: "4px",
          boxSizing:" border-box "}}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>PASSWORD</label>
      <input
        style={{  width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border:" 1px solid #ccc",
        borderRadius: "4px",
        boxSizing:" border-box " }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button onClick={handleClick} disabled={isFetching} style={{  
        width: "100%",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer" }}>
      <Link to="/" style={{color:"white", textDecoration: "none",position:"relative",background: "none",fontSize: "16px"}}>
        Login
        </Link>
      </button>
      {error && <span>Something went wrong...</span>}
      </div>
      </form>
     
    </div>
  );
};

export default Login
