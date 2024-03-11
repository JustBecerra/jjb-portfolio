import { Box } from "@mui/material";
import { Navbar } from "../../components/NavBar";
import Information from "../../components/Information";
import TechnologiesMain from "../../components/TechnologiesMain";
import ProjectsMain from "../../components/ProjectsMain";

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
        gap: "16rem",
        // backgroundImage: `url('../../../public/night-road.jpg')`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // height: "auto",
        // backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Information />
      <TechnologiesMain />
      <ProjectsMain />
    </Box>
  );
}
