import React ,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import {mobile} from "../reponsive"
import { login } from "../redux/apiCalls";
import { Link } from 'react-router-dom';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: rgb(0 128 20 / 20%);
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #ccc;
    ${mobile({width:"75%"})}
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
    position: absolute;
    top: 25px;
    left: 50px;
`;
// const Link = styled.a`
//     margin: 5px 0;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `;
const Error = styled.span`
    color: red;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
`;
const Span = styled.span`
  
`;

const Login = (history,search) => {
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");
  
  // const {isFetching,error} = useSelector((state) => state.user);
  const user = useSelector((state)=> state.user);
  const {isFetching,error,userL} = user;

  const dispatch =useDispatch();
  const redirect = window.location.search ? window.location.search.split("=")[1] : '/';
  useEffect(() =>{
    if(userL){
      window.history.push(redirect)
    }
    return() =>{

    }
  },[userL])
  const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch,{username,password});
  }
  return (
    <Container>
          <Logo> <Link style={{color:"teal",textDecoration:"none"}} to="/">LAMA</Link> </Logo>   
      <Wrapper>
  
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="UserName" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            {error && <Span>Something went wrong...</Span>} 
            
            <Link style={{color:"teal",textDecoration:"none"}} to="/register">CREATE A  NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
