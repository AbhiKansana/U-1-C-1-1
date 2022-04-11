// reusable card component
import './item_sub.css'
import Counter from "./counter";



const GroceryItem = (props) => {

 

  return (
      <>
      <div className="main">
        <img src={props.img}/>
        <p className="title">{props.title}</p>
        <div className="both">
        <p>{props.price}</p>
        <p><s>{props.mrp}</s></p>
        </div>
        <div>
        <Counter/>
       
        </div>
       
      </div>

      
      </>
  )
};
export default GroceryItem;
