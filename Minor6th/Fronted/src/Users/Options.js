import React, { useState } from "react";
import "./optionstyle.css";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Options({ setRestaurantvalue }) {
  const navigate = useNavigate();

  const [final, setfinal] = useState({
    cuisine: "",
    category: "",
    rating: "",
    location: "",
    price: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setfinal({ ...final, [name]: value });
  };

  const handleSubmit = async () => {
    setRestaurantvalue(final);
    navigate("/Restaurants");
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="handling" align="true">
          Restruant Form
        </h1>
        <div className="subhandcon">
          <h4 className="subhandling" cl="true">
            Thank you for taking the time to provide your honest feedback! I am
            always looking for ways to improve and your comments help me do so.
          </h4>
        </div>
        <br />
        <br />
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
                final.cuisine.includes("Indian") ? "contained" : "outlined"
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
                final.cuisine.includes("Chinese") ? "contained" : "outlined"
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
                final.cuisine.includes("Southindian") ? "contained" : "outlined"
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
                final.cuisine.includes("Italian") ? "contained" : "outlined"
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
              variant={final.cuisine.includes("All") ? "contained" : "outlined"}
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
                final.category.includes("veg") ? "contained" : "outlined"
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
                final.category.includes("nonVeg") ? "contained" : "outlined"
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
                final.category.includes("any") ? "contained" : "outlined"
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
                final.rating.includes("exactly") ? "contained" : "outlined"
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
                final.rating.includes("above4") ? "contained" : "outlined"
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
                final.rating.includes("above3") ? "contained" : "outlined"
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
              variant={final.rating.includes("any") ? "contained" : "outlined"}
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
                final.location.includes("InsideCity") ? "contained" : "outlined"
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
                final.location.includes("OutsideCity")
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
                final.price.includes("above2000") ? "contained" : "outlined"
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
                final.price.includes("below2000") ? "contained" : "outlined"
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
                final.price.includes("below1000") ? "contained" : "outlined"
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
                final.price.includes("below500") ? "contained" : "outlined"
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
