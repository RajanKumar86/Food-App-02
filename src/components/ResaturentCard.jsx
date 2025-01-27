import { CDN_Img } from "../../src/utils/constants";

const RestaurentCard = ({
  cloudinaryImageId,
  resNames,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwo,
  locality,
}) => {
  return (
    <div className="res-card  m-4 p-4   bg-gray-200 rounded-lg hover:bg-gray-400 justify-items-center">
    <img className="rounded-lg h-48 w-56 " src={CDN_Img + cloudinaryImageId}></img>

    <div className="res-card-content font-light">
      <h2 className="font-bold py-3 text-l text-center">{resNames}</h2>
        <h4>Cuisines: {cuisines}</h4>
        <h5>Rating: {avgRating} Star </h5>
        <h5>{costForTwo} </h5>
        <h5>DeliveryTime :{deliveryTime} </h5>
        <h5>Locality: {locality} </h5>
      </div>
    </div>
  );
};

export default RestaurentCard;