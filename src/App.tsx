import './App.css'
import {useState,useEffect} from "react";

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
     {products.map((product) => (
         <li key={product.id}>
             {`${product.name} - ${product.price}
             ${product.description}
             `}
         </li>
     ))}
   </ul>
      Users:
      {users.map((user) => (
          <li key={user.id}>
              {user.name}
          </li>
      ))}
  </div>

  )
}

export default App
