"use client";

import { Box, Typography } from "@mui/material";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <Box sx={{ textAlign: align, maxWidth: 760, mx: align === "center" ? "auto" : 0, mb: { xs: 5, md: 7 } }}>
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: "secondary.dark", display: "block", mb: 2 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" sx={{ color: "primary.main", mb: subtitle ? 2 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", fontSize: { xs: "1rem", md: "1.15rem" } }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
