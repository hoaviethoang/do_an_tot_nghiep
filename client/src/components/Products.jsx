import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'

import Product from './Product';
import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const H1 = styled.button`
  padding-left: 30px;
  display: block;
	position: relative;
	padding: 1.5em 3em;
	appearance: none;
	border: 0;
	background: transparent;
	color: #e55743;
	text-transform: uppercase;
	letter-spacing: .25em;
	outline: none;
	cursor: pointer;
	font-weight: bold;
	border-radius: 0;
	box-shadow: inset 0 0 0 var(--border-size) currentcolor;
	transition: background .8s ease;
`;
const H2 = styled.div`
  
`;



const Products = ({cat,filters,sort,maxPrice}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat? 
        `http://localhost:5000/api/products?category=${cat}`
        : "http://localhost:5000/api/products"
        );
       
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  
  useEffect(()=>{
    maxPrice&&
    setFilteredProducts( products.filter((item)=>item.price<=maxPrice))
 
  }
  , [products, maxPrice]
  )
  return (
    <H2>
       <H1>Sản phẩm mới nhất</H1>
    <Container>
     
      
      {cat 
      ? filteredProducts.map(item=>(<Product item={item} key={item.id}/>)) 
      :  products
          .reverse()
          .slice(0,8)
          .map(item=>(<Product item={item} key={item.id}/>))}
    </Container>
    </H2>
  )
}

export default Products
