import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from './ReduxFile/Globalstate'

const HeaderComp = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state)=> state.currentUser)

  
  return (
    <Container>
      <Wrapper>
        <LogoHolder>
          <Logo to="/">F</Logo>
        </LogoHolder>
        <NavBar>
            <NavBarHolder><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></NavBarHolder>
            <NavBarHolder>Cart: 0</NavBarHolder>
        </NavBar>
        <Register>
        {
          userData ? (
            <Navigation>
						<Avatar src={userData?.avatar} />
						<Nav1
							onClick={() => {
                dispatch(signOut())
							}}
						>
							Log Out
						</Nav1>
					</Navigation>
          ): (
            <Button2>Register</Button2>
          )
        }
       

        </Register>
      </Wrapper>
    </Container>
  )
}

export default HeaderComp


const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	background-color: darkorange;
	margin-right: 20px;
`;

const Nav1 = styled.div`
	margin-right: 25px;
	transition: all 350ms;
	color: black;
	text-decoration: none;
	position: relative;

	::after {
		content: "";
		position: absolute;
		background-color: darkorange;
		height: 3px;
		width: 100%;
		left: 0;
		top: 21px;
		opacity: 0;
		transition: all 550ms;
		transform: scale(0);
		transform-origin: center left;
	}
	&.active {
		::after {
			content: "";
			position: absolute;
			background-color: darkorange;
			height: 3px;
			width: 80%;
			left: 0;
			top: 21px;
			opacity: 1;
			transition: all 550ms;
			transform: scale(1);
			transform-origin: center left;
		}
	}
	:hover {
		cursor: pointer;
		transform: scale(1.02);

		::after {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const Navigation = styled.div`
	display: flex;
	align-items: center;
`;

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

`

const NavBarHolder = styled.div``
const NavBar = styled.div`
width:400px ;
display: flex;
justify-content: space-between;
`
const Logo = styled(Link)`
display:flex ;
justify-content:center ;
align-items:center ;
font-weight:bold ;
color: #fff;
text-decoration:none ;
font-family:poppins ;
`
const LogoHolder = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
height:40px ;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width:40px ;
border-radius:3px ;
background-color:#E4811C ;

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
font-family:poppins ;
`