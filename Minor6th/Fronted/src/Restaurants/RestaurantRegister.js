import React, { useState } from "react";
import "../Users/optionstyle.css";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Divider, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RestaurantsRegister() {
    const navigate = useNavigate();

  const [finaldata, setfinal] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    restiming: "",
    cuisine: "",
    category: "",
    rating: "",
    location: "",
    price: "",
    resdisimg: "",
    resmenu: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setfinal({ ...finaldata, [name]: value });
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:3001/sendRequest", finaldata)
      .then((res) => {
        console.log(res.data);
          setfinal({
            fullname: "",
            email: "",
            mobile: "",
            password: "",
            address: "",
            restiming: "",
            cuisine: "",
            category: "",
            rating: "",
            location: "",
            price: "",
            resdisimg: "",
            resmenu: "",
          });
          navigate('/Restaurants/Login')
      });
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="handling" align="true">
          Restaurants Registation Form
        </h1>
        <br />
        <Divider sx={{ color: "#00e673" }} />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Name:</FormLabel>
          <TextField
            name="fullname"
            onChange={(e) => handleClick(e)}
            id="standard-basic"
            variant="standard"
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Email Address:</FormLabel>
          <TextField
            id="standard-basic"
            variant="standard"
            name="email"
            type="email"
            onChange={(e) => handleClick(e)}
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Mobile Number:</FormLabel>
          <TextField
            id="standard-basic"
            variant="standard"
            name="mobile"
            onChange={(e) => handleClick(e)}
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Password:</FormLabel>
          <TextField
            id="standard-basic"
            variant="standard"
            name="password"
            type="password"
            onChange={(e) => handleClick(e)}
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>

        <br />

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Address:</FormLabel>
          <TextField
            id="standard-basic"
            variant="standard"
            multiline
            name="address"
            onChange={(e) => handleClick(e)}
            rows={2}
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>Restaurants Timing:</FormLabel>
          <TextField
            id="standard-basic"
            variant="standard"
            type="time"
            name="restiming"
            onChange={(e) => handleClick(e)}
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
          />
        </FormControl>

        <Divider sx={{ color: "#00e673" }} />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            What type of cuisine do you offer?
          </FormLabel>
          <br></br>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Button
              className="radio"
              variant={
                finaldata.cuisine.includes("Indian") ? "contained" : "outlined"
              }
              value="Indian"
              name="cuisine"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Indian
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.cuisine.includes("Chinese") ? "contained" : "outlined"
              }
              value="Chinese"
              name="cuisine"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Chinese
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.cuisine.includes("Southindian")
                  ? "contained"
                  : "outlined"
              }
              value="Southindian"
              name="cuisine"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              South Indian
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.cuisine.includes("Italian") ? "contained" : "outlined"
              }
              value="Italian"
              name="cuisine"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Italian
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.cuisine.includes("All") ? "contained" : "outlined"
              }
              value="All"
              name="cuisine"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              All
            </Button>
          </FormControl>
        </FormControl>
        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            What type of food do you offer?
          </FormLabel>
          <br></br>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Button
              className="radio"
              variant={
                finaldata.category.includes("veg") ? "contained" : "outlined"
              }
              value="veg"
              name="category"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              veg
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.category.includes("nonVeg") ? "contained" : "outlined"
              }
              value="nonVeg"
              name="category"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              non-veg
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.category.includes("any") ? "contained" : "outlined"
              }
              value="any"
              name="category"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              any
            </Button>
          </FormControl>
        </FormControl>
        <br></br>

        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            What is the rating of your restaurants ?
          </FormLabel>
          <br></br>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Button
              className="radio"
              variant={
                finaldata.rating.includes("exactly") ? "contained" : "outlined"
              }
              value="exactly"
              name="rating"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Exactly
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.rating.includes("above4") ? "contained" : "outlined"
              }
              value="above4"
              name="rating"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Above 4
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.rating.includes("above3") ? "contained" : "outlined"
              }
              value="above3"
              name="rating"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Above 3
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.rating.includes("any") ? "contained" : "outlined"
              }
              value="any"
              name="rating"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              any
            </Button>
          </FormControl>
        </FormControl>
        <br></br>

        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            What is the location of your restaurants?
          </FormLabel>
          <br></br>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Button
              className="radio"
              variant={
                finaldata.location.includes("InsideCity")
                  ? "contained"
                  : "outlined"
              }
              value="InsideCity"
              name="location"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Inside City
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.location.includes("OutsideCity")
                  ? "contained"
                  : "outlined"
              }
              value="OutsideCity"
              name="location"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Outside City
            </Button>
          </FormControl>
        </FormControl>
        <br></br>

        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            What is average cost per person of the food at your restaurant?
          </FormLabel>
          <br></br>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Button
              className="radio"
              variant={
                finaldata.price.includes("above2000") ? "contained" : "outlined"
              }
              value="above2000"
              name="price"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Above 2000
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.price.includes("below2000") ? "contained" : "outlined"
              }
              value="below2000"
              name="price"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Below 2000
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.price.includes("below1000") ? "contained" : "outlined"
              }
              value="below1000"
              name="price"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Below 1000
            </Button>
            <Button
              className="radio"
              variant={
                finaldata.price.includes("below500") ? "contained" : "outlined"
              }
              value="below500"
              name="price"
              color="success"
              onClick={(e) => handleClick(e)}
              sx={{
                fontSize: "12px",
                mr: 2,
                color: "#fff",
                border: "1px solid #00e673",
              }}
            >
              Below 500
            </Button>
          </FormControl>
        </FormControl>
        <Divider />
        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            Restaurants Display Image:
          </FormLabel>
          <TextField
            name="resdisimg"
            type="file"
            onChange={(e) => handleClick(e)}
            id="standard-basic"
            variant="standard"
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
            accept="image/*"
          />
        </FormControl>

        <FormControl sx={{ m: 3 }} variant="standard">
          <FormLabel sx={{ color: "#00e673" }}>
            Restaurants Menu Image:
          </FormLabel>
          <TextField
            name="resmenu"
            type="file"
            onChange={(e) => handleClick(e)}
            id="standard-basic"
            variant="standard"
            sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
            accept="image/*"
          />
        </FormControl>
        <br></br>
        <FormControl>
          {/* setFile(URL.createObjectURL(e.target.files[0])); */}
          <Button
            sx={{
              mt: 1,
              mr: 1,
              ml: 2,
              mb: 2,
              bgcolor: "#00e673",
              color: "#000",
            }}
            type="button"
            onClick={() => handleSubmit()}
            variant="contained"
          >
            Submit Chioce
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
