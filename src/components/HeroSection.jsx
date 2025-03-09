import { Box, Container, Typography } from "@mui/material";
import React from "react";

function HeroSection() {
  return (
    <Container sx={{ position: "relative" }}>
      <img
        src="../../src/assets/heroimage.jpg"
        style={{ height: "500px", width: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <Typography color="white" variant="h4" marginBottom={"10px"}>
          Labour Day: Enjoy 20% Off EQ3
        </Typography>
        <Typography color="white">
          Save on designs made with longevity in mind. Now until September 3rd.
        </Typography>
      </Box>
    </Container>
  );
}

export default HeroSection;
