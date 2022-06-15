import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const HeaderComp = () => {
  const [Auth , SetAuth ] = React.useState(false)

  
  return (
    <Container>
      <Wrapper>
        <LogoHolder>
          <Logo>.FoodPlace</Logo>
        </LogoHolder>
        <NavBar>
            <NavBarHolder><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></NavBarHolder>
            <NavBarHolder>Cart: 0</NavBarHolder>
        </NavBar>
        <Register>
        {
          Auth  ? (
            <Button1 ><Link >SignUp</Link></Button1>
          ) : (
            <Button2><Link style={{textDecoration:"none",}} to="/register">Register</Link></Button2>
          )
        }

        </Register>
      </Wrapper>
    </Container>
  )
}

export default HeaderComp

const Button2 = styled.div`
height: 40px;
width: 80px;
background-color:#E4811C ;
display: flex;
justify-content:center ;
align-items:center ;
border-radius:4px ;
text-decoration: none ;
color: black;

`

const Button1 = styled.div`
height: 40px;
width: 80px;
background-color:#E4811C ;
display: flex;
justify-content:center ;
align-items:center ;
border-radius:4px ;
`
const Register = styled.div`
display:flex ;
height: 80px;
width: 100px;
justify-content:center ;
align-items: center;
justify-content:space-between;
`

const NavBarHolder = styled.div``
const NavBar = styled.div`
width:400px ;
display: flex;
justify-content: space-between;
`
const Logo = styled.div``
const LogoHolder = styled.div`

`

const Wrapper = styled.div`
height:80px ;
width:90vw ;
display:flex ;
justify-content:center ;
align-items:center ;
justify-content:space-between ;
`

const Container = styled.div`
height:80px ;
width:100vw ;
display:flex ;
justify-content:center ;
align-items:center ;
`