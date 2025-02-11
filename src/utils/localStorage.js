const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)

    }
    return [];
}

const saveCartToLocalStorage =  cart => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

const addToLocalStorage = id =>{
    const cart = getStoredCart()
    cart.push(id);
    // save to local storage
    saveCartToLocalStorage(cart)
}

const removeFromLocalStorage = id => {
    const cart = getStoredCart()
    const newCart = cart.filter(item => item !== id)
    saveCartToLocalStorage(newCart)
}

export {addToLocalStorage ,getStoredCart,removeFromLocalStorage}
// localStorage.setItem('cart', JSON.stringify([1,19,3999]))