import { Box } from "@mui/material";
import { Navbar } from "../../components/NavBar";
import Information from "../../components/Information";
import TechnologiesMain from "../../components/TechnologiesMain";
import ProjectsMain from "../../components/ProjectsMain";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        width: "auto",
        marginBottom: 3,
      }}
    >
      <Navbar />
      <Information />
      <TechnologiesMain />
      <ProjectsMain />
      <Footer />
    </Box>
  );
}
