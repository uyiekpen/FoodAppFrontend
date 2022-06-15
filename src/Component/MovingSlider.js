import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const MovingSlider = () => {
  return (
    <Container>
    <Carousel fade >
    <Carousel.Item >
      <Image
        className="d-block w-100"
        src="/assets/pix2.jpg"
        alt="First slide"
      />
      <Carousel.Caption>

        <TextHolder>
        <Text>I like people who love to eat. They’re the best kind of people in the world</Text>
        </TextHolder>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/assets/pix3.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <TextHolder>
        <Text>I’m on a seafood diet. I see food, I eat it.</Text>

        </TextHolder>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <Image
        className="d-block w-100"
        src="/assets/pix1.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <TextHolder>

        <Text>Food shared is happiness multiplied.</Text>
        </TextHolder>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
    </Container>
  )
}

export default MovingSlider

const Text = styled.p`
text-transform: uppercase;
font-weight:bold ;
font-size:30px ;
@media screen and (max-width:768px){
  text-transform:capitalize;
font-weight:bold ;
font-size:15px ;
}
`

const TextHolder = styled.div`
text-align: center;
display:flex ;
flex-direction: column;
justify-content:center ;
font-family:poppins ;
align-items:center ;
`

const Image = styled.img`
height: 500px;
  width: 100%;
  object-fit: cover;
`

const Container = styled.div`
height: 500px;
  width: 100vw;
`

