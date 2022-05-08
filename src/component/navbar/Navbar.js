import { Button, Grid, IconButton, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const currentURL = window.location.href;
  console.log(currentURL);
  return (
    <div>
      <Grid container m="10px">
        <Grid item container justifyContent="center" xs={3}>
          <p
            style={{
              fontWeight: 700,
              color: "#9C42E2",
              fontSize: "34px",
              lineHeight: "40px",
              fontFamily: "Roboto",
              height: "40px",
            }}
          >
            BALI TENUN SHOP
          </p>
        </Grid>
        <Grid item xs={4} bgcolor="#E3E3E3">
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Cari kain tenun di sini ..."
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Grid>
        <Grid item container pr="40px" justifyContent="flex-end" xs={5}>
          <Grid item>
            <div>
              <Button
                variant="text"
                href="/"
                style={{ textTransform: "none", color: "black" }}
              >
                beranda
              </Button>
              {currentURL === "http://localhost:3000/" && (
                <hr
                  style={{
                    marginTop: "-10px",
                    marginLeft: "10px",
                    width: "30px",
                    height: "1px",
                    backgroundColor: "#2537DD",
                  }}
                />
              )}
            </div>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              href="/keranjang"
              style={{ textTransform: "none", color: "black" }}
            >
              keranjang
            </Button>
            {currentURL === "http://localhost:3000/keranjang" && (
              <hr
                style={{
                  marginTop: "-10px",
                  marginLeft: "10px",
                  width: "30px",
                  height: "1px",
                  backgroundColor: "#2537DD",
                }}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
