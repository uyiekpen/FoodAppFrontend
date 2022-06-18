import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Link, useNavigate} from "react-router-dom"
import styled from 'styled-components'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import pix from "./pix1.jpg"
import axios from 'axios'


const Register = () => {
const navigate = useNavigate()
const [image , setImage] = useState(pix)
const [avatar , setAvatar ] = useState("")

const registerSchema = yup.object().shape({
    username: yup.string().required("this feild cannot be empty"),
    email: yup.string().email().required("this feild cannot be empty"),
    password : yup.string().required("this feild cannot be empty"),
    confirm : yup
                .string()
                .oneOf([yup.ref("password"),null],"password must match")
})

const {
    register,
    reset,
	handleSubmit,
    formState: {errors}

} = useForm({
    resolver: yupResolver(registerSchema)
})

const handleImage = (e) => {
	const file = e.target.files[0]
	const save = URL.createObjectURL(file)
	setImage(save)
	setAvatar(file)
}

const onSubmit = handleSubmit(async (value) => {
	console.log(value);
	const { userName, email, password } = value;
	const url = "http://localhost:5346/api/register";

	const formData = new FormData();
	formData.append("username", userName);
	formData.append("email", email);
	formData.append("password", password);
	formData.append("avatar", avatar);

	const config = {
		"content-type": "multipart/form-data",
		onUploadProgress: (ProgressEvent) => {
			const { loaded, total } = ProgressEvent;
			const percent = Math.floor((loaded * 100) / total);
			console.log(percent);
		},
	};

	const options = {
		onUploadProgress: (ProgressEvent) => {
			const { loaded, total } = ProgressEvent;
			const percent = Math.floor((loaded * 100) / total);
			console.log(percent);
		},
	};

	await axios.post(url, formData, config).then((res) => {
		console.log("Error Data: ", res);
	});

	navigate("/signin");
});

  return (
    <Component> 
        <Wrapper>
           <Card>
		   <ImageHolder>
		   <Image src={image}/>
		   <ImageLabel htmlFor='pix'>upload image</ImageLabel>
		   <ImageInput
			   id="pix"
			   type ="file"
			   onChange={handleImage}
			   accept='image/*'
		   />
	   </ImageHolder>
           <Form onSubmit={onSubmit} type="multipart/form-data">  

                <Holder>
                    <Label>Username</Label>
                    <Input placeholder='username' {...register("username")}/>
                    <Error>{errors.message && errors?.message.username}</Error>
                </Holder>
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
                <Holder>
                <Label>Confirm Password</Label>
                <Input placeholder='confirm password' {...register("comfirm")}/>
                <Error>{errors.message && errors?.message.confirm}</Error>
                </Holder>
                <Button type="submit" onClick={()=>{
				}}>Submit</Button>
				<Div>
					Already have an Account? <Span to="signin">Sign in Here</Span>
				</Div>
            </Form>
           </Card>
        </Wrapper>
    </Component>
  )
}

export default Register

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


const ImageInput = styled.input`
display: none;
`
const ImageLabel = styled.label`
	padding: 10px 20px;
	background-color: #004080;
	color: white;
	border-radius: 3px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.01);
	}
`;

const ImageHolder = styled.div`
	width: 100%;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	background-color: darkorange;
	margin-bottom: 20px;
	transition: all 350ms;
	:hover {
		cursor: pointer;
		transform: scale(1.02);
	}
`;

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