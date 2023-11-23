import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage/MainPage.jsx';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import CartPage from 'pages/CartPage/CartPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/category" element={<CategoryPage />} />
                    <Route path="/dogs" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
