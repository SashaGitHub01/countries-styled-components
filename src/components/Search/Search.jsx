import React from "react";
import styled from 'styled-components';
import { BsSearch as Icon } from 'react-icons/bs';

const InputContainer = styled.div`
   display: flex;
   align-items:center;
   max-width: 100%;
   gap: 2.5rem;
   padding: 1.5rem 2rem;
   box-shadow: var(--shadow);
   width: 100%;
   background-color: var(--colors-ui-base);
   border-radius: var(--radius);

   @media (min-width: 767px) {
      max-width: 420px;
   }
`

const Input = styled.input`
font-size: var(--fs-sm);
background-color: var(--colors-ui-base);
width: 100%;
color: var(--colors-text);

&::placeholder {
   color: var(--colors-text);
}
`

const Label = styled.label`
& .search-icon {
   vertical-align: middle;
   cursor: pointer;
}
`

const Search = ({ search, setSearch }) => {

   const handleChange = (e) => {
      setSearch(e.target.value)
   }

   return (
      <InputContainer>
         <Label htmlFor="search">
            <Icon size={'1.8rem'} className="search-icon" />
         </Label>
         <Input
            value={search}
            onChange={handleChange}
            id="search"
            type={'search'}
            placeholder="Search for a country..."
         />
      </InputContainer>
   )
}

export default Search
