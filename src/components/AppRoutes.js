import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import MenuBar from './MenuBar';
import ProductList from './ProductList';
import ProductPages from './ProductPages';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import PaymentPage from './PaymentPage';
import OrderList from './OrderList';
import TrackDetails from './TrackDetails';
import DeliveryComponent from './DeliveryComponent';
import ComplaintForm from './ComplaintForm';
import ContactComponent from './ContactComponent';
import ProfileComponent from './ProfileComponent';

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <>
                    <MenuBar /> 
                </>
                <div className='container'>
                    <Routes >
                        <Route exact path='home' element={<Home />} />
                        <Route exact path='orderlist' element={<OrderList />} />
                        <Route exact path='home/:username' element={<Home />} />
                        <Route exact path='productlist' element={<ProductList />} />
                        <Route exact path='productdetails/:productId' element={<ProductDetails />} />
                        <Route exact path='login' element={<Login />} /> 
                        <Route exact path='delivery' element={<DeliveryComponent />} /> 
                        <Route exact path='register' element={<Register />} />
                        <Route exact path='cart' element={<Cart />} />
                        <Route exact path='payment' element={<PaymentPage />} />
                        <Route exact path='productpage' element={<ProductPages />} />
                        <Route exact path='' element={<Home />} />
                        <Route exact path='profile' element={<ProfileComponent/>} />
                        <Route exact path='trackdetails' element={<TrackDetails />} />
                        <Route exact path='complaintform' element={<ComplaintForm />} />
                        <Route exact path='contact' element={<ContactComponent/>}/>


                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;

// const AppRoutes = () => {
//     return (
//         <>
//             <p>App Routes Component</p>
//         </>
//     );
// };

// export default AppRoutes;






















