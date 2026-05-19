"use client";

import { Box, Container, Typography } from "@mui/material";
import { PROCESS_STEPS } from "../data/site";
import SectionHeader from "./SectionHeader";

export default function ProcessSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 }, bgcolor: "#ffffff" }}>
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              A simpler way to{" "}
              <Box component="span" sx={{ fontStyle: "italic", color: "secondary.dark" }}>
                replace a roof
              </Box>
            </>
          }
          subtitle="From the first phone call to the final walkthrough — here's exactly what to expect when you work with Stone Ranch Roofing."
        />

        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Connector line, desktop only */}
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: 44,
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(200,146,61,0.35) 50%, transparent 50%)",
              backgroundSize: "12px 1px",
              backgroundRepeat: "repeat-x",
              zIndex: 0,
            }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <Box
              key={step.title}
              sx={{
                position: "relative",
                p: { xs: 3.5, md: 4 },
                pt: { xs: 5, md: 6 },
                borderRadius: 3,
                bgcolor: "#FAF8F4",
                border: "1px solid rgba(27,42,65,0.06)",
                overflow: "hidden",
                transition:
                  "transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease",
                zIndex: 1,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background:
                    "linear-gradient(90deg, #C8923D 0%, #E0B36A 100%)",
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                  transition: "transform 350ms ease",
                },
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 40px rgba(14,24,40,0.08)",
                  borderColor: "rgba(200,146,61,0.35)",
                },
                "&:hover::before": {
                  transform: "scaleX(1)",
                },
              }}
            >
              {/* Numbered badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 20, md: 24 },
                  left: { xs: 24, md: 28 },
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #1B2A41 0%, #324A6B 100%)",
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  boxShadow:
                    "0 6px 16px rgba(14,24,40,0.18), inset 0 0 0 2px rgba(200,146,61,0.4)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Box>

              {/* Watermark numeral */}
              <Typography
                aria-hidden
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -6,
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 900,
                  fontSize: "6rem",
                  color: "rgba(27,42,65,0.04)",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>

              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mt: { xs: 4, md: 4.5 },
                  color: "secondary.dark",
                }}
              >
                Step {i + 1}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mt: 0.75,
                  mb: 1.5,
                  color: "primary.main",
                  fontSize: "1.35rem",
                }}
              >
                {step.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {step.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
