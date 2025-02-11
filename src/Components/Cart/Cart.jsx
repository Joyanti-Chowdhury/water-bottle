import'./Cart.css'

const Cart = ({cart ,handleRemoveFromCart}) => {
    return (
        <div>
                   <h1>click bottle : {cart.length}</h1>

                   <div className="cart-container">
                
                    {
                        cart.map(bottle =>   <div>
                            <img src={bottle.img}></img>
                            <h2>{bottle.name}</h2>
                            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                        </div> )
                    }
                   </div>

        </div>
    );
};

export default Cart;