import React from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import { Button } from "../Button/Button";
import { Typography } from '../Typography/Typography';

const Row = styled.div`
   display: flex; 
   flex-direction: column;
   gap: 3rem;

   @media (min-width: 767px) {
   flex-direction: row;
   align-items: center;
   gap: 7rem;
}
`

const ImgCont = styled.div`
box-shadow: var(--shadow);
max-width: 100%;

@media (min-width: 767px) {
   max-width: 45%;
}
`

const Img = styled.img`

`

const Name = styled.h2`
font-size: 3rem;
font-weight: var(--fw-bold);
padding-bottom: 2.5rem;
`

const InfoCol = styled.div`
height: 100%;
padding: 3rem 0;
display: flex;
flex-direction: column;
gap: 2.5rem;
`

const InfoList = styled.ul`
display: flex;
flex-direction: column;
gap: 1.4rem;
flex-wrap: wrap;
`

const InfoItem = styled.li`
font-size: 1.8rem;
display: flex;
align-items: center;
gap: 0.4rem;

& span {
   font-size: 1.8rem;
}
`

const BordersGroup = styled.div`
display: flex;
align-items: center;
gap: 1.5rem;
`

const BordersRow = styled.div`
display: flex;
align-items: center;
gap: 1.2rem;
row-gap: 2rem;
flex-wrap: wrap;
`

const InfoRow = (
   { flag, name, topLevelDomain, capital, subregion, population, nativeName, currencies = [], region, borders }
) => {
   const nav = useNavigate();

   return (
      <Row>
         <ImgCont>
            <Img src={flag} />
         </ImgCont>
         <InfoCol>
            <Name>{name}</Name>
            <InfoList>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Native name:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {nativeName}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Capital:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {capital}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Region:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {region}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Subregion:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {subregion}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Population:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {population}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Domain:
                  </Typography>
                  <Typography fw='var(--fw-light)'>
                     {topLevelDomain}
                  </Typography>
               </InfoItem>
               <InfoItem>
                  <Typography fw='var(--fw-bold)'>
                     Currencies:
                  </Typography>
                  {currencies.map((cr) => <Typography fw='var(--fw-light)' key={cr}>
                     {cr.name}
                  </Typography>)}
               </InfoItem>
            </InfoList>
            <BordersGroup>
               <Typography fw='var(--fw-bold)'>
                  Borderds:
               </Typography>
               <BordersRow>
                  {borders
                     && borders.map((n) => (
                        <Button
                           key={n}
                           onClick={() => navigator(`/country/${n}`)}
                        >
                           {n}
                        </Button>))}
               </BordersRow>
            </BordersGroup>
         </InfoCol>
      </Row>
   )
}

export default InfoRow
