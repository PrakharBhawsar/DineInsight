import React from "react";
import "./Res.css";
import {
  Divider,
  FormControl,
  TextField,
  FormLabel,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RestaurantsConfirm({ selectres }) {
  const navigate = useNavigate();
  const [info, setinfo] = React.useState([]);
  const Uid = localStorage.getItem("LoginId");
  const [finaldata, setfinaldata] = React.useState({
    resdate: "2023-04-06",
    people: "1",
    tableNo: 0,
    UserId: Uid,
    RestaurantId: selectres,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfinaldata({ ...finaldata, [name]: value });
  };
  const getdata = async () => {
    await axios
      .get(`http://127.0.0.1:3001/getData/${selectres}`)
      .then((res) => {
        setinfo(res.data);
        console.log(res.data);
      });
  };

  const handleform = async () => {
    await axios
      .post("http://127.0.0.1:3001/restaurantreserve", finaldata)
      .then((res) => {
        alert(
          `Table number: ${finaldata.tableNo} request send to the restaurant`
        );
        navigate("/Restaurants");
      });
  };
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <header>
      <div className="appbar">
        <p className="appbar-text">Select date for your reservation</p>
      </div>
      <br />
      <Divider sx={{ color: "#00e673" }} />
      <FormControl sx={{ m: 3, ml: 20 }} variant="standard">
        <FormLabel sx={{ color: "#00e673" }}>Date:</FormLabel>
        <TextField
          name="resdate"
          id="standard-basic"
          variant="standard"
          type="date"
          onChange={(e) => handleChange(e)}
          value={finaldata.resdate}
          sx={{ bgcolor: "#00e673", borderRadius: 1, padding: 1 }}
        />
      </FormControl>

      <FormControl sx={{ m: 3, ml: 10 }} variant="standard">
        <FormLabel sx={{ color: "#00e673" }}>People:</FormLabel>
        <TextField
          name="people"
          id="standard-basic"
          variant="standard"
          type="number"
          onChange={(e) => handleChange(e)}
          placeholder="1"
          sx={{
            bgcolor: "#00e673",
            borderRadius: 1,
            padding: 1,
            width: "150px",
          }}
          value={finaldata.people}
        />
      </FormControl>

      <FormControl sx={{ mt: 4, ml: 10 }} variant="standard">
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 1, padding: 1, width: "150px" }}
          onClick={handleform}
        >
          Check Availability
        </Button>
      </FormControl>
        <FormControl>
      <Typography variant="h5" sx={{color:"lightgreen",ml:5,mt:4}}> Mobile Number</Typography>
      <Typography variant="h6" sx={{color:"white",ml:6}} > {info.mobile}</Typography>
      </FormControl>
        <FormControl>
      <Typography variant="h5" sx={{color:"lightgreen",ml:5,mt:4}}> Address</Typography>
      <Typography variant="h6" sx={{color:"white",ml:5}} > {info.address}</Typography>
      </FormControl>
        <FormControl>
      <Typography variant="h5" sx={{color:"lightgreen",ml:5,mt:4}}> Timing</Typography>
      <Typography variant="h6" sx={{color:"white",ml:6}} > {info.restiming}</Typography>
      </FormControl>
      <div className="head-text">
        <div className="head-image">
          <img
            src={require("./table.jpg")}
            className="img"
            alt="Freedom Blog"
          />
        </div>
        <div className="text-on-image">
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn1"
              value="1"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "1" ? "green" : "lightgreen",
              }}
            >
              1
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn2"
              va="true"
              type="button"
              value="2"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "2" ? "green" : "lightgreen",
              }}
            >
              2
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn3"
              value="3"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "3" ? "green" : "lightgreen",
              }}
            >
              3
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn4"
              value="4"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "4" ? "green" : "lightgreen",
              }}
            >
              4
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn5"
              value="5"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "5" ? "green" : "lightgreen",
              }}
            >
              5
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn6"
              value="6"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "6" ? "green" : "lightgreen",
              }}
            >
              6
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn7"
              value="7"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "7" ? "green" : "lightgreen",
              }}
            >
              7
            </Button>
          </FormControl>

          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn8"
              value="8"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "8" ? "green" : "lightgreen",
              }}
            >
              8
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn9"
              value="9"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "9" ? "green" : "lightgreen",
              }}
            >
              9
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn10"
              value="10"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "10" ? "green" : "lightgreen",
              }}
            >
              10
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn11"
              value="11"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "11" ? "green" : "lightgreen",
              }}
            >
              11
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn12"
              value="12"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "12" ? "green" : "lightgreen",
              }}
            >
              12
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn13"
              value="13"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "13" ? "green" : "lightgreen",
              }}
            >
              13
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn14"
              value="14"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "14" ? "green" : "lightgreen",
              }}
            >
              14
            </Button>
          </FormControl>
          <FormControl variant="standard">
            <Button
              name="tableNo"
              variant="contained"
              className="btn15"
              value="15"
              color="success"
              onClick={(e) => handleChange(e)}
              sx={{
                borderRadius: 1,
                padding: 1,
                bgcolor: finaldata.tableNo === "15" ? "green" : "lightgreen",
              }}
            >
              15
            </Button>
          </FormControl>
        </div>
      </div>
    </header>
  );
}
