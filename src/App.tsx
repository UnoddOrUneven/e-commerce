import './App.css'
import {useState,useEffect} from "react";

async function  getAllProducts() {
  const response =  await fetch("/api/all-products");
  return await response.json();
}


function App() {
const [products, setProducts] = useState([]);
useEffect(() => {
    getAllProducts().then(setProducts);
},[])
  return (
  <div className="product-container">
    Products:
   <ul>
     {products.map((product) => (
         <li key={product}>
             {`${product.name} - ${product.price}
             ${product.description}
             `}
         </li>
     ))}
   </ul>
  </div>
  )
}

export default App
