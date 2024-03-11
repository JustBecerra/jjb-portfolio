"use client";
import { Box } from "@mui/material";
import React from "react";
import { TechnologiesCards } from "../TechnologiesCards";
import { useTranslations } from "next-intl";
import { TechnologiesList } from "@/misc";

export default function Technologies() {
  const t = useTranslations("technologies");
  const frontendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "frontend"
  );
  const backendTechnologies = TechnologiesList.filter(
    (tech) => tech.area === "backend"
  );
  return (
    <Box
      sx={{
        width: "80%",
        height: "40%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <TechnologiesCards
        technologies={frontendTechnologies}
        title={t("frontendtech")}
      />
      <TechnologiesCards
        technologies={backendTechnologies}
        title={t("backendtech")}
      />
    </Box>
  );
}
