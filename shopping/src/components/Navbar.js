import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import { fontSize } from '@mui/system';
import { mobile } from "../responsive";
import { useSelector } from "react-redux";








const Container = styled.div`
height:60px;
${mobile({ height: "50px" })}



`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({height:"10px 0px"})}
`
const Left = styled.div`
flex: 1;
display: flex;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;



`
const Input =styled.input`
border: none;
${mobile({ width: "30px" })}


`

const Center = styled.div`
flex: 1;
text-align: center;

`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize:"24px"})}

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2, justifyContent: "center" })}

`
const MenuItems = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ flex: 2, justifyContent: "center" })}
`









function Navbar() {
  const quantity = useSelector(state=>state.cart.requantity)
  console.log(quantity);
  return (
    
    
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Welcome</Logo>
          </Center>
        <Right>
          
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGNIN</MenuItems>
          <MenuItems>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingBagOutlined/>
          </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
    
    
  )
}

export default Navbar





