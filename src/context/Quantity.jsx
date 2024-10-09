import { createContext,useState } from "react";
 
export let Contex = createContext();
let Quantity = ({children}) =>{
    let [quantity,setQuantity] = useState(1);
    let [price,setPrice] = useState(null);
    let [size,setSize] = useState("S");
    return(
        <Contex.Provider value={{quantity,setQuantity,price,setPrice,size,setSize}}>
            {children}
        </Contex.Provider>       
    );
}
export default Quantity;