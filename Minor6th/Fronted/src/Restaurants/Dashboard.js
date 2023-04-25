import { CssBaseline, AppBar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
//icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import axios from "axios";

export default function Dashboard() {
  const [info, setInfo] = useState([]);
  const handleClick = async (resid,msz) => {
    await axios.put(`http://127.0.0.1:3001/updateResData/`,{resid,msz})
    .then((res)=>{console.log(res.data)});
  };
  const getData = async () => {
    const id = localStorage.getItem("ResLoginId");
    await axios.get(`http://127.0.0.1:3001/getResData/${id}`).then((res) => {
      setInfo(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#6945FF" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            Restaurant
          </Typography>
          <AccountCircleIcon />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, bgcolor: "#F5F5F5", height: "97vh" }}
      >
        <Toolbar />
        <Typography
          variant="h4"
          sx={{ fontSize: "20px", color: "#6945FF", textAlign: "center" }}
        >
          Restaurant Management
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            {/* // first Row */}
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={6}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Restaurant Management
                </TableCell>
              </TableRow>
            </TableHead>
            {/* // Thrid row */}
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Restaurant Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  People
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Table Number
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Accept
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "16px",
                    letterSpacing: "0em",
                  }}
                >
                  Reject
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {info.map((user) => {
                return (
                  <TableRow key={user._id}>
                    <TableCell align="center" sx={{ width: "150px" }}>
                      {user.resdate}
                    </TableCell>
                    <TableCell align="center">{user.people}</TableCell>
                    <TableCell align="center">{user.tableNo}</TableCell>
                    <TableCell align="center">{user.ResStatus}</TableCell>
                    <TableCell align="center">
                      <ArrowUpwardIcon
                      onClick={()=>handleClick(user._id,"Success")}
                        sx={{ cursor: "pointer", color: "blue" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ArrowDownwardIcon
                                            onClick={()=>handleClick(user._id,"Cancelled")}
                        sx={{ cursor: "pointer", color: "red" }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
