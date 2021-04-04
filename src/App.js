import './App.css';
import {BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/Notfound/NotFound';
import Admin from './components/Admin/Admin';
import {  createContext, useState } from 'react';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import route from './components/PrivateRoute/PrivateRoute';
import OrderDetail from './components/OrderDetail/OrderDetail';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  
  const [userData,setUserData] = useState({})
  return (
   <UserContext.Provider value={[userData,setUserData]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/admin">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <OrderDetail></OrderDetail>
        </PrivateRoute>
       <Route path="/login">
          <Login></Login>
       </Route>
       <PrivateRoute path="/addProduct">
          <AddProduct></AddProduct>
       </PrivateRoute>
       <PrivateRoute path="/manageProduct">
         <ManageProduct></ManageProduct>
       </PrivateRoute>
       <PrivateRoute path="/checkout/:id">
         <Checkout></Checkout>
       </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
