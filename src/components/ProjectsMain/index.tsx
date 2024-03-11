"use client";
import { Box } from "@mui/material";
import { ProjectCard } from "../ProjectCard";
import { useTranslations } from "next-intl";
import huellitasSH from "../../../public/huellitasSH.png";
import caloriecounterSH from "../../../public/caloriecounterSH.png";
import cryptotrackerSH from "../../../public/cryptotrackerSH.png";
import marvelseekerSH from "../../../public/marvelseekerSH.png";
import React from "react";
import {
  calorieCounterGitHubURL,
  calorieCounterURL,
  cryptoTrackerGithubURL,
  huellitasGithubURL,
  huellitasURL,
  marvelSeekerGithubURL,
  marvelSeekerURL,
} from "@/misc";

export default function ProjectsMain() {
  const t = useTranslations("projects");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "80%",
        height: "70vh",
        gap: "2rem",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <ProjectCard
        title={"Huellitas"}
        screenshot={huellitasSH}
        url={huellitasURL}
        description={t("huellitasdescription")}
        github={huellitasGithubURL}
      />
      <ProjectCard
        title={"Calorie Counter"}
        screenshot={caloriecounterSH}
        url={calorieCounterURL}
        github={calorieCounterGitHubURL}
        description={t("caloriecounterdescription")}
      />
      <ProjectCard
        title={"Crypto Tracker"}
        screenshot={cryptotrackerSH}
        github={cryptoTrackerGithubURL}
        description={t("cryptotrackerdescription")}
      />
      <ProjectCard
        title={"Marvel Seeker"}
        screenshot={marvelseekerSH}
        url={marvelSeekerURL}
        github={marvelSeekerGithubURL}
        description={t("marvelseekerdescription")}
      />
    </Box>
  );
}
