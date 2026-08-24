import './App.css'
import {useState,useEffect} from "react";
import type {User} from "./models/user.ts";
import type {Product} from "./models/product.ts";
import {ProductCard} from "./components/ProductCard.tsx";

async function  getAllProducts() {
  const response =  await fetch("/api/products/get-all");
  return await response.json();
}
async function getAllUsers(){
    const response =  await fetch("/api/users/get-all")
    return await response.json();
}

function App() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(setUsers);
    }, []);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then(setProducts);
    },[])

  return (
  <div className="product-container">
    Products:
   <ul>
     {products.map((product : Product) => (
         <li key={product.id}>
             <ProductCard product={product}/>
         </li>
     ))}
   </ul>
      Users:
      <ul>
      {users.map((user: User) => (
          <li key={user.id}>
              {user.name}
          </li>
      ))}
      </ul>
  </div>

  )
}

export default App
