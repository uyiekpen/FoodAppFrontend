import React from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from "react-router-dom"
import styled from 'styled-components'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { createUser } from './ReduxFile/Globalstate'


const SignIn = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

const registerSchema = yup.object().shape({
    email: yup.string().email().required("this feild cannot be empty"),
    password : yup.string().required("this feild cannot be empty")
})

const {
    register,
    reset,
    handleSubmit,
    formState: {errors}

} = useForm({
    resolver: yupResolver(registerSchema)
})

const onSubmit = handleSubmit(async (value)=>{
	console.log(value)
	const {email , password} = value
	const url = "http://localhost:5346/api/signin";

	await axios.post(url,{email, password}).then((res)=>{
		dispatch(createUser(res.data.data))
		console.log(res.data.data)
	})
	navigate("/")
})

  return (
    <Component> 
        <Wrapper>
           <Card>
           <Form onSubmit={onSubmit}>   
             <Holder>
                <Label>Email</Label>
                <Input placeholder='email' {...register("email")}/>
                <Error>{errors.message && errors?.message.email}</Error>
                </Holder>
                <Holder>
                <Label>Password</Label>
                <Input placeholder='password' {...register("password")}/>
                    <Error>{errors.message && errors?.message.password}</Error>
                </Holder>
                <Button type='submit'>Submit</Button>
				<Div>
					Don't have an Account? <Span to="signin">Sign Up Here</Span>
				</Div>
            </Form>
           </Card>
        </Wrapper>
    </Component>
  )
}

export default SignIn

const Span = styled(Link)`
	margin-left: 5px;
	text-decoration: none;
	color: darkorange;
	cursor: pointer;
`;

const Div = styled.div`
	display: flex;
	margin-top: 10px;
`;


const Button = styled.button`
width: 80%;
	margin-top: 30px;
	height: 40px;
	font-family: Poppins;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	font-weight: 300;
	outline: none;
	border: 0;
	background-color: #004080;

	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`


const Error = styled.div`
color: red;
	font-weight: 500;
	font-size: 12px;
`
const Input = styled.input`
width: 100%;
	height: 30px;
	border-radius: 3px;
	padding-left: 5px;
	::placeholder {
		font-family: Poppins;
	}
	border: 1px solid silver;
	outline: none;
`

const Label = styled.label`
	font-weight: 500;

`
const Holder = styled.div`
display: flex;
	flex-direction: column;
	width: 80%;
	align-items: flex-start;
	margin-top: 10px;
`
const Form = styled.form`

display : flex;
flex-direction:column ;
justify-content: center;
align-items:center ;
`

const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	width: 500px;
	min-height: 300px;
	/* height: 100%; */
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	flex-direction: column;
`


const Wrapper = styled.div`
width: 100%;
	height: 100%;
	justify-content: center;
	display: flex;
	align-items: center;
`
const Component = styled.div`
width: 100%;
height: calc(100vh - 80px);
padding-top: 70px;
`