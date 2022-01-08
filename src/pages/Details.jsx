import React from "react";
import { useParams } from "react-router";
import styled from 'styled-components';
import { Button } from "../components/Button/Button";
import { HiOutlineArrowNarrowLeft as Arrow } from 'react-icons/hi';
import { Flex } from "../components/Flex/Flex";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOne } from '../store/actionCreators/countries';
import { useSelector } from "react-redux";
import InfoRow from "../components/InfoRow/InfoRow";

const Col = styled.div`
   
`;

const Head = styled.div`
   padding: 3rem 0 ;
`;


const Details = () => {
   const nav = useNavigate();
   const params = useParams();
   const dispatch = useDispatch();
   const { isLoadingPage, activePage, borders } = useSelector(state => state.countries)

   useEffect(() => {
      dispatch(fetchOne(params.name))
   }, [params.name])

   return (
      <Col>
         <Head>
            <Button size='large' onClick={() => nav(-1)}>
               <Flex gap='0.6rem' ai='center'>
                  <Arrow size={'2.2rem'} />
                  Back
               </Flex>
            </Button>
         </Head>
         {activePage
            && <InfoRow {...activePage} borders={borders} />}
      </Col>
   )
}

export default Details
