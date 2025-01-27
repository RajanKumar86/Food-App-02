
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  
    const { resId } = useParams();
    const resinfo = useRestaurentMenu(resId);


  if (resinfo === null) return <h2>Please wait...</h2>;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h5> rating: {avgRatingString} </h5>
      <p> {cuisines.join(", ")} </p>
      <h5> {costForTwoMessage} </h5>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} ---
            <b> Rs- {item.card.info.price / 100} </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;