import React from "react";
import { Button, Grid, IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";

export default function Homepage() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const data = [
    {
      nama: "KAIN ENDEK",
      link: "/asset/homepage/kainEdek.jpg",
    },
    {
      nama: "KAIN ENDEK",
      link: "/asset/homepage/kainEdek.jpg",
    },
    {
      nama: "KAIN ENDEK",
      link: "/asset/homepage/kainEdek.jpg",
    },
  ];
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      <img
        src="asset/homepage/kotak.png"
        alt="headers"
        style={{ width: "100vw", height: "34px" }}
      />
      <Box px="100px">
        <p style={{ fontWeight: 700, paddingTop: "40px" }}>
          Menampilkan jenis Kain Tenun BALI
        </p>
        <Grid container direction="row" spacing={2}>
          {data.map((item) => (
            <Grid item container direction="column" spacing={1} xs={6}>
              <Grid item container justifyContent="center">
                <Box mx="20px">
                  <img
                    src={item.link}
                    alt="headers"
                    style={{ width: "100%", height: "273px" }}
                  />
                  <Box
                    fontWeight="700"
                    color="white"
                    p="10px"
                    width="200px"
                    borderRadius="30px"
                    textAlign="center"
                    zIndex={0}
                    backgroundColor={
                      "#" + Math.floor(Math.random() * 16777215).toString(16)
                    }
                  >
                    {item.nama}
                  </Box>
                </Box>
              </Grid>
              <Grid item mx="150px">
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    borderRadius: "30px",
                    backgroundColor: "yellow",
                    color: "black",
                    fontWeight: 700,
                  }}
                >
                  lihat detail
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
