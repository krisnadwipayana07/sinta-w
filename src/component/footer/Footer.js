import { Grid } from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box } from "@mui/system";

export default function Footer() {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Grid container>
        <Grid item xs={5}>
          <p
            style={{
              fontWeight: 700,
              color: "#9C42E2",
              fontSize: "24px",
              lineHeight: "40px",
              fontFamily: "Roboto",
              height: "40px",
            }}
          >
            BALI TENUN SHOP
          </p>
          <p>
            Company
            <br />
            © 2011-2021 PT.TENUNPERMAI.
            <br />
            All Rights Reserved
          </p>
        </Grid>
        <Grid item container xs={7}>
          <Grid item xs={4}>
            <h4>follow us</h4>
            <Box>
              <WhatsAppIcon /> +6281234567
            </Box>
          </Grid>
          <Grid item xs={4}>
            <h4>follow us</h4>
            <Box>
              <WhatsAppIcon /> +6281234567
            </Box>
          </Grid>
          <Grid item xs={4}>
            <h4>follow us</h4>
            <Box>
              <WhatsAppIcon /> +6281234567
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
