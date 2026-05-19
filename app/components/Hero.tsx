"use client";

import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { COMPANY, IMG, TRUST_STATS } from "../data/site";
import HeroForm from "./HeroForm";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: { xs: "-158px", md: "-216px" },
        pt: { xs: "206px", md: "296px" },
        pb: { xs: 8, md: 14 },
        bgcolor: "#0E1828",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={IMG.heroRanch}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src={IMG.heroVideo} type="video/mp4" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(14,24,40,0.92) 0%, rgba(14,24,40,0.78) 38%, rgba(14,24,40,0.55) 65%, rgba(14,24,40,0.45) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1, maxWidth: "xl" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 1fr" },
            gap: { xs: 6, lg: 8 },
            alignItems: "center",
          }}
        >
          <Box sx={{ color: "#fff" }}>
            <Chip
              icon={<StarRoundedIcon sx={{ color: "#E5B45F !important" }} />}
              label={COMPANY.subtitle}
              sx={{
                bgcolor: "rgba(229,180,95,0.18)",
                color: "#F5DDB1",
                fontWeight: 600,
                borderRadius: 999,
                px: 1.5,
                mb: 3,
                border: "1px solid rgba(229,180,95,0.35)",
              }}
            />
            <Typography variant="h1" sx={{ color: "#fff", mb: 3 }}>
              Utah&rsquo;s Choice for Reliable Roofs.
            </Typography>
            <Stack
              component="a"
              href="https://share.google/LWVastmYRnHJ4rOLH"
              target="_blank"
              rel="noopener noreferrer"
              direction="row"
              alignItems="center"
              spacing={1.25}
              sx={{
                mb: 4,
                textDecoration: "none",
                color: "rgba(255,255,255,0.92)",
                width: "fit-content",
                px: 1.75,
                py: 1,
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                transition: "background-color 0.2s ease, border-color 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.14)",
                  borderColor: "rgba(255,255,255,0.32)",
                },
              }}
              aria-label="Read our 130+ Google reviews"
            >
              <Stack direction="row" spacing={0.25} aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarRoundedIcon
                    key={i}
                    sx={{ color: "#E5B45F", fontSize: { xs: 20, md: 22 } }}
                  />
                ))}
              </Stack>
              <Typography
                component="span"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                130+ Google Reviews
              </Typography>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 5 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Get a Free Estimate
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                href={COMPANY.phoneHref}
                sx={{
                  borderWidth: 2,
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.6)",
                  "&:hover": {
                    borderWidth: 2,
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Call {COMPANY.phone}
              </Button>
            </Stack>

          </Box>

          <Box sx={{ position: "relative" }}>
            <HeroForm />
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          {TRUST_STATS.map((s) => (
            <Box key={s.label}>
              <Typography
                sx={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.78)", mt: 1 }}>
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
