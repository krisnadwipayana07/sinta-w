import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Detail() {
  const data = {
    nama: "Kain Katun",
    fabric: "fabric",
    deskripsi:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna venenatis sodales ut molestie sed purus. Feugiat arcu orci, gravida tempor dignissim sapien. Justo, ultrices duis pretium risus interdum scelerisque est. Dignissim pretium massa felis congue quam sit massa dignissim et. ",
    harga: 50000,
    link: "/asset/homepage/kainEdek.jpg",
  };
  return (
    <div>
      <Box py="20px">
        <center>
          <h1>Detail Barang</h1>
        </center>
      </Box>
      <Grid container>
        <Grid item xs={6} width="50%">
          <Box mx="20px">
            <img
              src={data.link}
              alt="headers"
              style={{ width: "100%", height: "500px" }}
            />
          </Box>
        </Grid>
        <Grid item container xs={6}>
          <Box border="2px solid black" p="10px" px="20px" borderRadius="40px">
            <Grid item>
              <Box pt="10px">
                <h3>{data.nama} </h3>
              </Box>
            </Grid>
            <Grid item>
              <Box pt="10px">
                <h4>Rp.{data.harga} </h4>
                <h4>{data.fabric} </h4>
              </Box>
            </Grid>
            <Grid item>
              <Box pt="10px">
                <p>{data.deskripsi} </p>
              </Box>
            </Grid>

            <Grid item container direction="column-reverse" width="100%">
              <Grid item>
                <Button variant="outlined" fullwidth backgroundColor="black">
                  + keranjang
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
