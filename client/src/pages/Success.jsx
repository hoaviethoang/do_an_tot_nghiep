import { useLocation } from "react-router-dom"
import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import styled from "styled-components"
import Slider from '../components/Slider';
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @keyframes outline {
	from {
		text-shadow: 0em -7em 10em #fff;
	}
	to {
		text-shadow: 0 0.02em #fff, 0.02em 0 #fff, -0.02em 0 #fff, 0 -0.02em #fff;
	}
}
`;
const Mess = styled.p`
  flex:1;
  text-align: center;
  font-size: 4rem;
  text-shadow: -0.01em -0.01em 0.01em #000;
	animation: rise 2s ease-in-out 0.5s forwards;
`;
const Mess1 = styled.p`
  padding-top: 10px;
  font-size: 2rem;
  text-shadow: -0.01em -0.01em 0.01em #000;
	animation: rise 2s ease-in-out 0.5s forwards;
`;

const Link1 = styled.a`
  color: red;
  text-decoration: none;
`;

const Success = () => {
  console.log('day la',localStorage)
  return (
    <div>
      <Navbar />
      <Announcement/>
      <Container>
        <Mess>
          Bạn đã thanh toán thành công sản phẩm <br />
          <Mess1> Liên hệ với Shop để biết thông tin sản phẩm đã mua:<Link1 href="https://www.facebook.com/hoangvhoa13/">Tại đây</Link1></Mess1>
         
          
        </Mess>
      
        
      </Container>
      
      
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
    
  )
}

export default Success
