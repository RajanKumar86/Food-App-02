import { useEffect, useState } from "react";
import { API_url } from "./constants";

const useBody = () => {

    const [ListofRestaurent, setListofRestaurent] = useState([]);
    const [searchedRestaurent, setSearchedRestaurent] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const res = await fetch(API_url);
        const json = await res.json();
    
        setListofRestaurent(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setSearchedRestaurent(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
      };
    

      return [searchedRestaurent, ListofRestaurent];
}

export default useBody
