import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const ListItem = () => {
    const [getData , setGetData] = useState([])

    const ongetData = async () =>{
        try{
            const url ="http://localhost:5346/market"
            await axios.get(url).then((res) =>{
                setGetData(res.data.data)
            })
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        ongetData()
    },[getData])
  return (
    <Container>
        <Wrapper>
            <Title>Our Store</Title>
            <Text>NEW PRODUCTS</Text>
            <TextHolder>
                <Text1>all</Text1>
                <Text1>fruits</Text1>
                <Text1>vegetables</Text1>
                <Text1>bread</Text1>
                <Text1>other</Text1>


            </TextHolder>
            <ProductDisplay>
                {
                    getData?.map((props) => (
                        <Card key={props._id}>
                        <ImageH>
                            <Image src={props.image}/>

                        </ImageH>
                    <Name>{props.title}</Name>
                    <Price>${props.price}</Price>
                </Card>
                    ))
                }
            </ProductDisplay>

        </Wrapper>
    </Container>
  )
}

export default ListItem

const Price = styled.div``
const Name = styled.div`
font-size: 20px;
color: #FE6B1B;
margin-top: 20px;
`
const Image = styled.img`
height: 200px;
width:200px ;
object-fit: cover;
`
const ImageH = styled.div`
height: 200px;
width:200px ;
background-color:black ;

`
const Card = styled.div`
height: 300px;
width:250px ;
display:flex;
justify-content:center ;
align-items:center ;
flex-direction:column ;

`
const ProductDisplay = styled.div`
display:flex ;
margin-top:20px ;
width:100% ;
`


const Text1 = styled.div``
const TextHolder = styled.div`
display:flex ;
width: 600px;
display: flex;
justify-content: center;
align-items:center ;
justify-content:space-around ;
`
const Text = styled.div`
font-size:30px ;
font-weight:bold ;
`

const Title = styled.div`
font-size:30px ;
font-style:italic;
color:#E4811C ;

`

const Wrapper = styled.div`
height:500px ;
width:90vw ;
display: flex;
justify-content: center ;
align-items:center ;
flex-direction:column;
`

const Container = styled.div`
height:500px ;
width:100vw ;
margin-top: 20px;
display: flex;
justify-content: center ;
align-items:center ;
font-family:poppins ;

`