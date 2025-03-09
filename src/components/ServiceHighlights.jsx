import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";

function ServiceHighlights() {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid2 container alignItems={"center"} spacing={5}>
        <Grid2 size={6}>
          <img
            src="../../src/assets/heroimage.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box padding={10}>
            <Typography variant="h5" marginBottom={"10px"}>
              AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
            </Typography>
            <Typography variant="caption">
              Affirm provides flexible payment solutions, allowing you to buy
              better and pay over time.
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "block", marginTop: "10px" }}
            >
              Learn More
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box padding={10}>
            <Typography variant="h5" marginBottom={"10px"}>
              AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
            </Typography>
            <Typography variant="caption">
              Affirm provides flexible payment solutions, allowing you to buy
              better and pay over time.
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "block", marginTop: "10px" }}
            >
              Learn More
            </Button>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <img
            src="../../src/assets/heroimage.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Grid2>
        <Grid2 size={6}>
          <img
            src="../../src/assets/heroimage.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Grid2>
        <Grid2 size={6}>
          <Box padding={10}>
            <Typography variant="h5" marginBottom={"10px"}>
              AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
            </Typography>
            <Typography variant="caption">
              Affirm provides flexible payment solutions, allowing you to buy
              better and pay over time.
            </Typography>
            <Button
              variant="contained"
              sx={{ display: "block", marginTop: "10px" }}
            >
              Learn More
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default ServiceHighlights;
