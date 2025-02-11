
import './Bottle.css'
const Bottle = ({bottle ,handleAddToCart}) => {
    const {name,img,price} = bottle;
    return (
        <div className='bottle'>
              <img src={img} alt="" />
             <h2>Name: {name}</h2>
             <p>Price: {price}</p>
             <button onClick={()=> handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;