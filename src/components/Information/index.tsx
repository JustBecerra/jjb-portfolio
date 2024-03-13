"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import sonriente from "../../../public/sonriente.jpg";
import { useTranslations } from "next-intl";

export default function Information({
  informationRef,
}: {
  informationRef: React.RefObject<HTMLDivElement>;
}) {
  const t = useTranslations("home");
  return (
    <Box
      sx={{
        width: "100%",
        height: "40%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        my: "8rem",
      }}
      ref={informationRef}
    >
      <Box
        sx={{
          width: { xs: "350px", md: "500px" },
          height: { xs: "350px", md: "500px" },
          position: "relative",
        }}
      >
        <Image src={sonriente} alt="" fill style={{ borderRadius: "1rem" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: { xs: "80%", md: "50%" },
          height: "50%",
          gap: "2rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "medium",
            textAlign: "center",
            fontSize: "2.5rem",
            whiteSpace: "normal",
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
