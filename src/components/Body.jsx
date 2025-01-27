import RestaurentCard from "./ResaturentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState(" ");
  const [searchedRestaurent, ListofRestaurent] = useBody();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1> No internet!! please check your internet...</h1>;







  return ListofRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border-2 border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="bg-green-200 m-3 px-4 py-1 rounded-lg"
            onClick={() => {
              const searchedRestaurent = ListofRestaurent.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setSearchedRestaurent(searchedRestaurent);
            }}
          >
            Search !!!
          </button>
        </div>

        <button
          className="bg-gray-200  px-4 py-1 rounded-lg "
          onClick={() => {
            const filteredList = ListofRestaurent.filter((restaurants) => {
              return restaurants.info.avgRating > 4.3;
            });

            setSearchedRestaurent(filteredList);
          }}
        >
          Top Rated Restaurent !
        </button>
        <button
          className="bg-blue-300 px-4 py-1 ml-10 rounded-lg"
          onClick={() => {
            setSearchedRestaurent(ListofRestaurent);
          }}
        >
          Reset
        </button>
      </div>

      <div className="res-container flex flex-wrap ">
        {searchedRestaurent.map((res) => {
          return (
            <Link to={"restaurents/" + res.info.id } key={res.info.id} >
              <RestaurentCard
                key={res.info.id}
                resNames={res.info.name}
                avgRating={res.info.avgRating}
                costForTwo={res.info.costForTwo}
                cuisines={res.info.cuisines[0]}
                cloudinaryImageId={res.info.cloudinaryImageId}
                locality={res.info.locality}
                deliveryTime={res.info.sla.slaString}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
