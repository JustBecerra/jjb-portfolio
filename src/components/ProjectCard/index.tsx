import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type props = {
  title: string;
  screenshot: StaticImageData;
  url?: string;
  github: string;
  description: string;
};

export const ProjectCard = ({
  title,
  screenshot,
  url,
  github,
  description,
}: props) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "28rem",
        justifyContent: "space-between",
        overflow: "visible",
      }}
      variant="outlined"
    >
      <CardContent>
        <Image src={screenshot} alt="" />
        <Typography sx={{ fontSize: "1rem", mt: "1rem" }}>{title}</Typography>
        <Typography sx={{ fontSize: "1rem", mt: "1rem" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {url && (
          <Link href={url} target="_blank">
            <Button disableTouchRipple disableRipple disableFocusRipple>
              <Typography sx={{ textTransform: "none", color: "#03680b" }}>
                Link
              </Typography>
            </Button>
          </Link>
        )}
        <Link href={github} target="_blank">
          <Button disableTouchRipple disableRipple disableFocusRipple>
            <Typography sx={{ textTransform: "none", color: "#03680b" }}>
              Github
            </Typography>
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
