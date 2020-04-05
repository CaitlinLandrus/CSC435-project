import React,{useState} from 'react';

//https://www.youtube.com/watch?v=hhAT0CJDWqM

export const CartContext = React.createContext();

export const CartProvider =(props) =>{
    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value = {[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
