import './App.css'
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import {ProductsCatalogue} from "./pages/ProductsCatalogue.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {CartPage} from "./pages/CartPage.tsx";
import {Navbar} from "./components/Navbar/Navbar";
function App() {
    return (
        <div>
            <Navbar/>
            <div className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<ProductsCatalogue/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    )
}

export default App
