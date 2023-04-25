import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid, Paper, Popover } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NotificationsActive } from "@mui/icons-material";

function Restaurant({ Restaurantvalue, setselectres }) {
  const [notifiopen, setnotifiopen] = React.useState(false);
  const [Info, setInfo] = React.useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  console.log(anchorElNav);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [data, setdata] = React.useState([]);
  const notificationdata = async () => {
    const id = localStorage.getItem("LoginId");
    await axios
      .get(`http://127.0.0.1:3001/getnotification/${id}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      });
  };
  const getData = () => {
    axios
      .get("http://127.0.0.1:3001/getdata")
      .then((res) => setdata(res.data.data));
  };
  const handleClick = (resdata) => {
    setselectres(resdata);
    navigate("/RestaurantsConfirm");
  };

  React.useEffect(() => {
    getData();
    notificationdata();
  }, []);
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#00e673" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Dine Insight
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Tooltip title="Open Notification">
                <NotificationsActive
                  sx={{ color: "black" }}
                  onClick={() => setnotifiopen(!notifiopen)}
                />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Popover
                open={notifiopen}
                anchorEl={null}
                onClose={() => setnotifiopen(false)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ mt: 5 }}
              >
                {Info.map((item) => {
                  return (
                    <div key={item._id}>
                      <Typography sx={{ p: 2 }}>
                        Table No. {item.tableNo} is {item.ResStatus}
                      </Typography>
                    </div>
                  );
                })}
              </Popover>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ marginTop: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            color: "#00e673",
          }}
        >
          Best Restaurants for You
        </h2>
        <Grid sx={{ flexGrow: 1, mt: 2 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={5}>
              {data
                .filter((value) => {
                  return Restaurantvalue.category === value.category
                    ? value.category
                    : Restaurantvalue.cuisine === value.cuisine
                    ? value.cuisine
                    : Restaurantvalue.rating === value.rating
                    ? value.rating
                    : Restaurantvalue.location === value.location
                    ? value.location
                    : Restaurantvalue.price === value.price
                    ? value.price
                    : Restaurantvalue;
                })
                .slice(0)
                .reverse()
                .map((value) => (
                  <Grid key={value._id} item>
                    <Paper
                      sx={{
                        height: 250,
                        width: 300,
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#1A2027" : "#3c4051",
                      }}
                    >
                      <img
                        src={require("./restaurantimg.jpg")}
                        width="300px"
                        height="150px"
                        alt="ad"
                      ></img>
                      <h2 style={{ textAlign: "center", color: "#00e673" }}>
                        {value.fullname}
                      </h2>
                      <Button
                        type="button"
                        variant="contained"
                        sx={{ ml: "50px", mt: "20px" }}
                        onClick={() => handleClick(value._id)}
                        color="success"
                      >
                        Reserve My Table
                      </Button>
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Restaurant;
