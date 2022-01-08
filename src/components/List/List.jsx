import React from "react";
import styled from 'styled-components';

const Grid = styled.div`
display: grid;
width: 100%;
padding: 4rem 0;

grid-template-columns: repeat(1, minmax(auto, 400px));
gap: 5rem;
justify-content: center;

@media (min-width: 767px) {
   grid-template-columns: repeat(2, 1fr);
   gap: 5rem;
}

@media (min-width: 1024px) {
   grid-template-columns: repeat(4, 1fr);
   gap: 5rem;
}
`

const List = ({ children }) => {
   return (
      <Grid>
         {children}
      </Grid>
   )
}

export default List
