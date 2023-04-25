import React from "react";
import Login from "./Users/Login";
import Signup from "./Users/Signup";
import Options from "./Users/Options";
import Restaurants from "./Users/Restaurants";
import RestaurantsConfirm from "./Users/RestaurantsConfirm";
import Dashboard from "./Restaurants/Dashboard";
import RestaurantsLogin from "./Restaurants/RestaurantsLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantsRegister from "./Restaurants/RestaurantRegister";

export default function App() {
  const [login, setlogin] = React.useState([]);
  const [Restaurantvalue, setRestaurantvalue] = React.useState([]);
  const [selectres, setselectres] = React.useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login login={login} />}></Route>
          <Route
            path="/Signup"
            element={<Signup setlogin={setlogin} />}
          ></Route>
          <Route
            path="/Options"
            element={<Options setRestaurantvalue={setRestaurantvalue} />}
          ></Route>
          <Route
            path="/Restaurants"
            element={
              <Restaurants
                Restaurantvalue={Restaurantvalue}
                setselectres={setselectres}
              />
            }
          ></Route>
          <Route
            path="/RestaurantsConfirm"
            element={<RestaurantsConfirm selectres={selectres} />}
          ></Route>
          <Route
            path="/Restaurants/Login"
            element={<RestaurantsLogin />}
          ></Route>
          <Route
            path="/Restaurants/Register"
            element={<RestaurantsRegister  />}
          ></Route>
          <Route path="/Restaurants/Home" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
