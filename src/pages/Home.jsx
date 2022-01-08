import React, { useEffect, useState } from "react";
import List from '../components/List/List';
import Card from "../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchAll } from "../store/actionCreators/countries";
import Controls from '../components/Controls/Controls';
import { useNavigate } from "react-router";
import { v4 } from 'uuid';

const Home = () => {
   const { isLoading, countries } = useSelector(state => state.countries)
   const [filtred, setFiltred] = useState(countries);
   const nav = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      if (!countries.length) {
         dispatch(fetchAll())
      };
   }, [countries])

   useEffect(() => {
      if (countries) {
         setFiltred(countries)
      };
   }, [countries])

   const handleFilter = (query, filter) => {
      let items = [...countries];

      if (filter) {
         items = items.filter((item) => item.region.toLowerCase().includes(filter.toLowerCase()))
      }

      if (query) {
         items = items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      }

      setFiltred(items)
   }

   return (
      <>
         <Controls handleFilter={handleFilter} />
         <List>
            {filtred?.map(({ flag, name, capital, region, population }) => {
               const cardProps = {
                  flag,
                  name,
                  info: [
                     { title: 'Capital', description: capital },
                     { title: 'Region', description: region },
                     { title: 'Population', description: population },
                  ]
               }

               return <Card
                  onClick={() => nav(`/country/${name}`)}
                  key={v4()}
                  {...cardProps}
               />
            })}
         </List>
      </>
   )
}

export default Home
