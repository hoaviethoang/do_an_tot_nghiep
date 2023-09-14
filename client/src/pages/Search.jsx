import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Product from "../components/Product";
import { publicRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Container = styled.div`
  
`;
const Containerd = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Search = () => {
  const [items, setProducts] = useState([]);
  const keyword = useLocation().search;
  

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await publicRequest.get(`/products/search${keyword}`);
      setProducts(res.data);
      console.log(res.data)
    };
    fetchProducts();
  }, [keyword]);
 
  return <Container>
    <Navbar/>
    <Announcement/>
       
    
    <Containerd>
    {items.map(item=>(
      <Product key={item._id} item={item}/>
    ))}
    </Containerd>
    <Newsletter/>
    <Footer/>
  </Container>
};

export default Search;