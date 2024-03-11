"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import sonriente from "../../../public/sonriente.jpg";
import { useTranslations } from "next-intl";

export default function Information() {
  const t = useTranslations("home");
  return (
    <Box
      sx={{
        width: "100%",
        height: "40%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Box sx={{ width: "500px", height: "500px", position: "relative" }}>
        <Image src={sonriente} alt="" fill style={{ borderRadius: "1rem" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          height: "50%",
          gap: "2rem",
        }}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap",
            fontWeight: "medium",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          {t("welcome")}
        </Typography>
        <Typography sx={{ fontSize: "1.25rem", textAlign: "center" }}>
          {t("intro")}
        </Typography>
      </Box>
    </Box>
  );
}
