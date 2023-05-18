import { IMG_CDN_URL } from "./contants";


const RestrauntCard = ({ name,cuisines,cloudinaryImageId,lastMileTravel }) =>{
    // console.log(rest);
   
    return (
      <div className = "card"> 
      <img 
      src={
        IMG_CDN_URL+cloudinaryImageId
    } 
      />
      <h2>{name}</h2>
      <h6>{cuisines.join(',')}</h6> 
      <h4>{lastMileTravel} minutes</h4>
  
  
      </div>
    );
  };

  export default RestrauntCard;
  

  