
import styled from "styled-components"
import {mobile} from "../reponsive"
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 128 20 / 20%);
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: #ccc;
    
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    padding: 20px 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Span = styled.span`
  
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
    position: absolute;
    top: 25px;
    left: 50px;
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res)
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Container>
      <Logo> <Link style={{color:"teal",textDecoration:"none"}} to="/">LAMA</Link> </Logo>   
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit} >
            <Input placeholder="Username" onChange={(e) =>setUsername(e.target.value)}/>
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          
            <Agreement>
               By Creating an account.i consent to the processing of my personal data accordance with the  <b>PRIVACY POLICY</b>
            </Agreement>
            
            <Button type="submit" onSubmit={handleSubmit}>CREATE</Button>
            
        </Form>
        {error && <Span>Something went wrong!</Span>}
      </Wrapper>
    </Container>
  )
}

export default Register
