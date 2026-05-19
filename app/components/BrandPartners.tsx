"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { BRAND_LOGOS } from "../data/site";

export default function BrandPartners() {
  const reel = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "text.secondary",
            mb: { xs: 3, md: 4 },
          }}
        >
          Trusted by
        </Typography>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
            "@keyframes brandMarquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "max-content",
              animation: "brandMarquee 32s linear infinite",
              "&:hover": { animationPlayState: "paused" },
            }}
          >
            {reel.map((b, i) => (
              <Box
                key={`${b.name}-${i}`}
                sx={{
                  position: "relative",
                  flexShrink: 0,
                  width: { xs: 130, md: 170 },
                  height: { xs: 56, md: 72 },
                  mx: { xs: 3, md: 5 },
                  filter: "grayscale(100%)",
                  opacity: 0.6,
                  transition: "opacity 250ms ease, filter 250ms ease",
                  "&:hover": { opacity: 1, filter: "grayscale(0%)" },
                }}
              >
                <Image
                  src={b.src}
                  alt={b.name}
                  fill
                  sizes="(max-width: 600px) 130px, 170px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
