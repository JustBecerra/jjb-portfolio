"use client";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import React from "react";

type technologiesProps = {
  name: string;
  icon: StaticImageData;
  area: string;
  time: number;
};

export const TechnologiesCards = ({
  technologies,
  title,
}: {
  technologies: technologiesProps[];
  title: string;
}) => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const t = useTranslations("technologies");
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        width: "40%",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>{title}</Typography>
      <Grid
        container
        spacing={8}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: "1rem",
          gap: "2rem",
        }}
      >
        {technologies.map((tech, i) => (
          <Grid
            key={i}
            sx={{
              width: { xs: "90%", md: "30%" },
              "&&.MuiGrid-item": {
                paddingTop: "1rem",
                paddingLeft: windowWidth > 1024 ? "64px" : "3rem",
              },
            }}
            item
          >
            <Paper
              sx={[
                {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: "0px 0px 12px 2px white",
                  border: "4px solid #fff",
                  "&:hover": {
                    boxShadow: "0px 0px 12px 2px #03680b",
                    border: "4px solid #03680b",
                  },
                },
              ]}
            >
              <Typography
                sx={{ textAlign: "center", mt: "1rem", fontSize: "1rem" }}
              >
                {tech.name}
              </Typography>
              <Typography
                sx={{ textAlign: "center", mb: "1rem", fontSize: "1rem" }}
              >
                {tech.time} {tech.time == 1 ? t("year") : t("years")}
              </Typography>
              <Box sx={{ width: "20%", height: "20%", mb: "1rem" }}>
                <Image src={tech.icon} alt="" />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
