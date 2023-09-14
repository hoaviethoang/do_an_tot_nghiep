import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from "../reponsive"
import {useSelector} from "react-redux"
import {login} from "../redux/apiCalls"

const Container = styled.div`
    height: 60px;
   ${mobile({height:"50px"})}
   
`;

const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0"})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    width: "100%";
    border: 0.5px solid lightgray;
    display:  flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`;

const Input = styled.input`
    border: none;
    width: 100%;
    -webkit-appearance: none;
    ${mobile({width:"50px"})}
    &:focus {
    outline: none;
    color: #6d7f8f;
    background-color: lighten(#e3edf7, 3%);
    }
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2,justifyContent:"center"})}
`;
const H1= styled.div``;
const Span = styled.span``;
const MenuItem =styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;
const Div2 = styled.div`
    background-color: initial;
      background-image: linear-gradient(-180deg, #00D775, #00BD68);
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
      outline: 0;
      overflow: hidden;
      padding: 1px 5px;
      pointer-events: auto;
      position: relative;
      text-align: center;
      touch-action: manipulation;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: top;
      white-space: nowrap;
      width: 100%;
      
      border: 0;
`;
    
    
const Navbar = () => {
    const [keyword,setKeyword] = useState();
    let history = useHistory();
    const quantity = useSelector(state=>state.cart.quantity)
    const user = useSelector((state) => state.user);
    const [search,setSearch]=useState("");
    const{currentUser} = user;
    const logout =(location) =>{
        localStorage.clear();
        window.location.reload();
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/search/?keyword=${keyword}`);
        }else{
            history.push("/")
        }

    }
  return (
    <Container>
        <Wrapper>
            <Left>
                
            <Logo> <Link style={{color:"teal",textDecoration:"none"}} to="/">Shop Bán đồng hồ</Link> </Logo>               
            </Left>
           
            <Center>
            <SearchContainer>
                <Search onClick={submitHandler} style={{color:"gray",fontSize:18,cursor: "pointer"}}/>
                <Input onChange={(e)=>setKeyword(e.target.value)} placeholder='Search'/>
                   
                </SearchContainer>
            </Center>
            <Right>
                {/* <Link to="register">
                <MenuItem>
                    REGISTER
                </MenuItem>
                </Link> */}
                {currentUser ?( <MenuItem style={{color:"teal",textDecoration:"none",fontSize:"18px"}} onClick={logout}><H1 >Name: {currentUser.username}</H1> <Div2>Logout</Div2>  </MenuItem>) :(
                <Link to="/login" style={{color:"teal",textDecoration:"none",fontSize:"20px"}}>
                <MenuItem>
                    SIGN IN
                </MenuItem>
                </Link>
                )}
                <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="secondary">
                        <ShoppingCartOutlined style={{color:"teal"}}/>
                    </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
