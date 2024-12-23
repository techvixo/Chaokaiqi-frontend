import React, { useEffect, useState } from "react"

const Ccontext = React.createContext();

// eslint-disable-next-line react/prop-types
const CartContext = ({children}) => {
    const [cartData, setCartData] = useState([])

    useEffect(()=>{
        const cartItems = JSON.parse(localStorage.getItem("chaoKaiQi-cart")) ?? []
        setCartData(cartItems)
    },[])

    return (
        <Ccontext.Provider value={{cartData, setCartData}}>
            {children}
        </Ccontext.Provider>
    );
};

export default CartContext;
export {Ccontext}