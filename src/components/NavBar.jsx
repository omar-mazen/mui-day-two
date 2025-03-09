import {
  AppBar,
  Box,
  Button,
  Container,
  Input,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const categories = [
  "Living",
  "Dining",
  "Bedroom",
  "Outdoor",
  "Office",
  "Lighting",
  "Rugs",
  "Accessories",
  "Brands",
  "Inspiration",
  "Gifts",
  "Sale",
];
function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Typography variant="h4">EQ3</Typography>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <LocationOnOutlinedIcon />
              <Typography sx={{ opacity: "0.5" }}>{`/`}</Typography>
              <HelpOutlineOutlinedIcon />
              <Typography sx={{ opacity: "0.5" }}>{`/`}</Typography>
              <FavoriteBorderOutlinedIcon />
              <Typography sx={{ opacity: "0.5" }}>{`/`}</Typography>
              <Button
                startIcon={<PersonOutlineOutlinedIcon />}
                variant="text"
                sx={{ color: "black" }}
              >
                join/login to EQ2
              </Button>
              <Typography sx={{ opacity: "0.5" }}>{`/`}</Typography>
              <Button
                startIcon={<LanguageOutlinedIcon />}
                variant="text"
                sx={{ color: "black" }}
              >
                En / CAD
              </Button>
              <Typography sx={{ opacity: "0.5" }}>{`/`}</Typography>
              <Button
                startIcon={<ShoppingCartOutlinedIcon />}
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              >
                {`Cart (0)`}
              </Button>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack direction={"row"} columnGap={3} flexWrap={"wrap"}>
              {categories.map((item, index) => (
                <Typography
                  sx={{
                    color: "black",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                  key={index}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
            <TextField
              variant="outlined"
              placeholder="search ..."
              size="small"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundColor: "orange",
          padding: "5px 0",
          textAlign: "center",
        }}
      >
        <Typography
          fontWeight={"bold"}
          fontSize={"1.2rem"}
          letterSpacing={"1px"}
          color="black"
        >
          Labour Day: Enjoy 20% Off EQ3
        </Typography>
      </Box>
    </>
  );
}

export default NavBar;
