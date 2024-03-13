"use client";
import { Box } from "@mui/material";
import { Navbar } from "../../components/NavBar";
import Information from "../../components/Information";
import TechnologiesMain from "../../components/TechnologiesMain";
import ProjectsMain from "../../components/ProjectsMain";
import Footer from "../../components/Footer";
import { useRef } from "react";

export default function Home() {
  const informationRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <Navbar
        scrollToComponent={scrollToComponent}
        informationRef={informationRef}
        technologiesRef={technologiesRef}
        projectsRef={projectsRef}
      />
      <Information informationRef={informationRef} />
      <TechnologiesMain technologiesRef={technologiesRef} />
      <ProjectsMain projectsRef={projectsRef} />
      <Footer />
    </Box>
  );
}
