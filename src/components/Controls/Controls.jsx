import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { MySelect } from "../MySelect/MySelect";
import Search from "../Search/Search";

const options = [
   { value: 'America', label: 'America' },
   { value: 'Europe', label: 'Europe' },
   { value: 'Asia', label: 'Asia' },
   { value: 'Africa', label: 'Africa' },
   { value: 'Oceania', label: 'Oceania' },
]

const ControlsRow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   gap: 4rem;
   width: 100%;
   position: relative;
   align-items: stretch;

   @media (min-width: 767px) {
      flex-direction: row;
   }
`

const Controls = ({ handleFilter }) => {
   const [search, setSearch] = useState('');
   const [filter, setFilter] = useState('');

   const handleChange = (val) => {
      setFilter(val || '')
   }

   useEffect(() => {
      handleFilter(search, filter.value)
   }, [search, filter]);

   return (
      <ControlsRow>
         <Search search={search} setSearch={setSearch} />
         <MySelect
            value={filter}
            onChange={handleChange}
            isSearchable={false}
            isClearable={true}
            placeholder='Filter by region'
            options={options}
         />
      </ControlsRow>
   )
}

export default Controls
