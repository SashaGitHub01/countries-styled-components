import React from "react";
import styled from 'styled-components';
import { Typography } from "../Typography/Typography";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const CardItem = styled.div`
background-color: var(--colors-ui-base);
cursor: pointer;
box-shadow: var(--shadow);
justify-self: center;
width: 100%;
`

const CardImg = styled.div`
background-image: ${({ flag }) => `url(${flag})`};
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
height: 18rem;
width: 100%;
overflow: hidden;
border-radius: var(--radius);
box-shadow: var(--shadow);
`

const CardBody = styled.div`
padding: 2.4rem 1.5rem ;
`

const CardTitle = styled.h3`
font-weight: var(--fw-bold);
font-size: 1.8rem;
margin-bottom: 1rem;
`

const InfoList = styled.ul`

`

const InfoItem = styled.li`
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;
`

const Card = ({ flag, name, info = [], onClick }) => {
   return (
      <CardItem onClick={onClick}>
         <CardImg flag={flag} />
         <CardBody>
            <CardTitle>{name}</CardTitle>
            <InfoList>
               {info.map(({ title, description }) => (
                  <InfoItem key={v4()}>
                     <Typography fw={'var(--fw-normal)'}>
                        {title}:
                     </Typography>
                     <Typography fw={'var(--fw-light)'}>
                        {description}
                     </Typography>
                  </InfoItem>
               ))}
            </InfoList>
         </CardBody>
      </CardItem>
   )
}

export default Card

