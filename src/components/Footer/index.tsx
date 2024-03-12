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
      <Typography className="md:!text-[1.25rem] min-[310px]:!text-[0.75rem] min-[310px]:w-[100%] text-center">
        {t("ifyouwish")}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "50%" }}
      >
        <Link href="https://github.com/JustBecerra" target="_blank">
          <GitHubIcon className="!w-[2rem] !h-[2rem] rounded-full shadow-lg hover:shadow-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/justo-becerra-14868a1b4/"
          target="_blank"
        >
          <LinkedInIcon className="!w-[2rem] !h-[2rem] rounded-lg shadow-lg hover:shadow-cyan-500" />
        </Link>
        <Typography className="md:!text-[1.5rem] min-[310px]:!text-[0.75rem] !font-medium">
          justj.becerra@gmail.com
        </Typography>
      </Box>
    </Box>
  );
}
