import { createContext, useState } from "react";

export const CartContext=createContext({cart:[]});
export const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

     const agregarItem=(item,cantidad)=>{

        if(!existeItem(item.id))
            setCart(prev=>[...prev,{...item,cantidad}])
        else{
            setCart(cart.map(p=>{
                if(p.id===item.id)
                  p.cantidad=p.cantidad+cantidad
                return p
            }))
        }

    }
    const existeItem=(id)=>{
        return cart.some(item=>item.id ===id)
    }
    const quitarItem=(id)=>{
        const cartUpdate=cart.filter(item=>item.id!==id)
        setCart(cartUpdate)
    } 
    const cantidadTotal=(id)=>{

        return cart.reduce((total, item) => total + item.cantidad, 0)
    }   
    const montoTotalDetalle=(id)=>{

        return cart.filter(item=>item.id===id).reduce((total, item) => total + item.cantidad*item.precio, 0)
    }   
    const montoFinal=()=>{
               
        return cart.reduce((total, item) => total + item.cantidad*item.precio, 0)
    }     
    const limpiar=()=>{
        setCart([]);
    }
    const getStock=(item)=>{
        return item.stock- (cart.filter(a=>a.id===item.id).length===0?0:cart.filter(a=>a.id===item.id)[0].cantidad)
    }

return( <CartContext.Provider value={{cart,agregarItem,limpiar,quitarItem,cantidadTotal,montoFinal,montoTotalDetalle,getStock}}>
    {children}
</CartContext.Provider>)
}