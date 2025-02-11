import { useEffect, useState } from "react";
import Bottle from "../Bottole/Bottle";
import'./Bottoles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utils/localStorage";
import Cart from "../Cart/Cart";

const Bottoles = () => {
     
const [bottles, setBottles] = useState([])
const [cart ,setCart] = useState([])


useEffect(() => {
    fetch('bottols.json')
    .then(res => res.json())
    .then(data => setBottles(data))
},[])

useEffect(() => {
    console.log('called the useEffect ',bottles.length)
        if(bottles.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles)
            const savedCart = [];

            for(const id of storedCart) {
                console.log(id)
                const bottle = bottles.find( bottle => bottle.id === id)
                if(bottle) {
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart)
            setCart(savedCart)
        }
     
},[bottles])

const handleAddToCart = bottle => {
    const newCart = [...cart , bottle]
    setCart(newCart)
    addToLocalStorage(bottle.id)
}

const handleRemoveFromCart = id => {
    const newCart = cart.filter(bottle => bottle.id !== id)
   removeFromLocalStorage(id)
}
    return (
        <div>
            <h2>Bottle:{bottles.length}</h2>
     
             
             <Cart cart={cart}
             handleRemoveFromCart={handleRemoveFromCart}
             ></Cart>

            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToCart = {handleAddToCart}
                    
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottoles;