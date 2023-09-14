import styled from "styled-components"
import { mobile } from "../reponsive";
import { Link } from "react-router-dom";

const Container =styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image =styled.img`
    width: 100%;
    height: 100%;
    object-fit:  cover;
    ${mobile({height:"20vh"})}
`;
const Title =styled.h1`
    color: #ed0f0f;
    margin-bottom: 20px;
    font-size: 50px;
`;
const Button =styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
`;
const Info =styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
