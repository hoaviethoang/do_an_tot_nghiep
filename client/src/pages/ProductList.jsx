import Announcement from "../components/Announcement"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../reponsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const Container = styled.div`

`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px" ,display:"flex",flexDirection: "column"})}
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`;
const Select =styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0"})}
`;
const Option =styled.option`
    
`;
const ProfuctList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const [maxPrice, setMaxPrice] = useState(1000);
   
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
    console.log(filters)
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>
        {cat}
      </Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
                <Option disabled>
                Material
                </Option>
                <Option>Sapphire</Option>
                <Option>Mineral (Kính cứng chịu lực)</Option>
                <Option>Mineral Crystal</Option>
                
            </Select>
            <Select name="size" onChange={handleFilters}>
                <Option disabled>
                    Size
                </Option>
                <Option>40mm</Option>
                <Option>38mm</Option>
                <Option>36mm</Option>
                
            </Select>
            <Select name="brand" onChange={handleFilters}>
                <Option disabled>
                    Brand
                </Option>
                <Option>rolex</Option>
                <Option>bentley</Option>
                <Option>citizen</Option>
                <Option>freelook</Option>
                
            </Select>
        </Filter>
        <Filter>
        <div className="filterItem">
          <FilterText>Filter by price</FilterText>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}$</span>
          </div>
        </div>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="newest" >Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
        </Filter>
         
      </FilterContainer>
      <Products cat={cat} maxPrice={maxPrice} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProfuctList
