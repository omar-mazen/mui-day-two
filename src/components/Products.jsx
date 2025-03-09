import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
const categories = [
  {
    name: "Ready to Ship Upholstery",
    image: "image_of_sofa.jpg",
  },
  {
    name: "Dining",
    image: "image_of_table_and_bench.png",
  },
  {
    name: "Storage Beds",
    image: "image_of_bed.png",
  },
  {
    name: "Lighting",
    image: "image_of_lamp.png",
  },
  {
    name: "Accent Tables",
    image: "image_of_round_table.png",
  },
  {
    name: "Rugs",
    image: "image_of_rug_material.png",
  },
  {
    name: "Bar & Counter Stools",
    image: "image_of_two_stools.png",
  },
  {
    name: "Accent Stools",
    image: "image_of_three_stools.png",
  },
  {
    name: "Accessories",
    image: "image_of_small_decorative_items.png",
  },
  {
    name: "Accent Chairs",
    image: "image_of_armchair.png",
  },
  {
    name: "Outdoor",
    image: "image_of_table_and_chairs.png",
  },
  {
    name: "Media & Storage",
    image: "image_of_media_console.png",
  },
];
function Products() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ textTransform: "uppercase" }}
        margin={"40px 0 20px"}
      >
        Shop by category
      </Typography>
      <Grid2 container spacing={1}>
        {categories.map((category, index) => (
          <Grid2 size={4} key={index}>
            <Card variant="outlined" sx={{ border: "0" }}>
              <CardActionArea sx={{ backgroundColor: "#f5f5f5" }}>
                <CardMedia
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={`../../src/assets/${category.image}`}
                    style={{ height: "100px" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography
                    textAlign={"center"}
                    color="#777"
                    fontSize={"0.7rem"}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default Products;
