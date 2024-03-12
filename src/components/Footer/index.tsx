"use client";
import { Box, Link, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export default function Footer() {
  const t = useTranslations("home");
  return (
    <Box
      sx={{
        marginBottom: "4rem",
        borderTop: "white solid 2px",
        width: "40%",
        paddingTop: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Typography sx={{ fontSize: "1.25rem", textAlign: "center" }}>
        {t("ifyouwish")}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "50%" }}
      >
        <Link href="https://github.com/JustBecerra" target="_blank">
          <GitHubIcon
            sx={{
              width: "2rem",
              height: "2rem",
              borderRadius: "100%",
              fill: "white",
              "&:hover": {
                fill: "rgb(8 145 178)",
              },
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/justo-becerra-14868a1b4/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              width: "2rem",
              height: "2rem",
              borderRadius: "100%",
              fill: "white",
              "&:hover": {
                fill: "rgb(8 145 178)",
              },
            }}
          />
        </Link>
        <Typography sx={{ fontSize: "1.25rem", fontWeight: "medium" }}>
          justj.becerra@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
