import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  let TOKEN ;
  let tokenTmp;
  // console.log(TOKEN)
  if(localStorage.getItem("persist:root")){
      tokenTmp= JSON.parse(localStorage.getItem("persist:root"))
      // console.log(tokenTmp)
      // console.log(tokenTmp.user)
      if (tokenTmp?.user === undefined || null ){
        
      //   console.log(tokenTmp.user)
        TOKEN = null;
       
      }else{
        const tokenTmp1 = JSON.parse(tokenTmp.user)
      //   console.log(tokenTmp1)
        tokenTmp = tokenTmp1?.currentUser
        TOKEN = tokenTmp?.isAdmin
      }
    }else{
      TOKEN = null;
    }
    const admin =TOKEN ;
  return (
    <Router>
    <Switch>
    <Route path="/login">
      <Login/>
    </Route>
     {
      admin && (
      <><Topbar/>
      <div className="container">
        <Sidebar/>
        
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/users">
            <UserList /> 
          </Route>
          <Route path="/user/:userId">
            <User/> 
          </Route>
          {/* <Route path="/newUser">
            <NewUser/>
          </Route> */}
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <Product/> 
          </Route>
          <Route path="/newproduct">
            <NewProduct/>
          </Route>
         
        
        
        </div></>)}
      </Switch>
    </Router>
  );
}

export default App;
