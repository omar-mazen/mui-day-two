import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import ServiceHighlights from "./components/ServiceHighlights";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HeroSection />
      <Products />
      <ServiceHighlights />
    </ThemeProvider>
  );
}

export default App;
