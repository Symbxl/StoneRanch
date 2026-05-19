"use client";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import SectionHeader from "./SectionHeader";

const PHOTOS = [
  { src: "/1.png", alt: "Stone Ranch Roofing project — Utah residential roof" },
  { src: "/2.png", alt: "Stone Ranch Roofing crew installing a new roof in Utah" },
  { src: "/3.png", alt: "Completed roofing project by Stone Ranch Roofing" },
];

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        bgcolor: "#0E1828",
        color: "#F1ECE2",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-15%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,146,61,0.18) 0%, rgba(200,146,61,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeader
          align="center"
          eyebrow="Who We Are"
          title={<Box sx={{ color: "#FAF8F4" }}>About Stone Ranch Roofing</Box>}
          subtitle={
            <Box sx={{ color: "rgba(241,236,226,0.82)" }}>
              Stone Ranch Roofing is a leading Utah-based roofing company located in
              Murray. We are dedicated to delivering exceptional roofing solutions,
              offering affordable roof repair, roof replacement, and free roofing
              estimates.
            </Box>
          }
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
            mt: { xs: 2, md: 4 },
          }}
        >
          {PHOTOS.map((photo, i) => (
            <Box
              key={photo.src}
              sx={{
                position: "relative",
                aspectRatio: "4 / 5",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
                transform: {
                  md: i === 1 ? "translateY(-24px)" : "translateY(0)",
                },
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                "&:hover": {
                  transform: {
                    xs: "scale(1.02)",
                    md: i === 1 ? "translateY(-32px)" : "translateY(-8px)",
                  },
                  boxShadow: "0 32px 80px rgba(0,0,0,0.55)",
                  "& img": { transform: "scale(1.05)" },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(14,24,40,0) 55%, rgba(14,24,40,0.55) 100%)",
                  pointerEvents: "none",
                },
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
            </Box>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            mt: { xs: 5, md: 7 },
            textAlign: "center",
            color: "rgba(241,236,226,0.6)",
            letterSpacing: "0.04em",
          }}
        >
          Family-owned · Local crews · Manufacturer-certified installs
        </Typography>
      </Container>
    </Box>
  );
}
