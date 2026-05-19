"use client";

import Link from "next/link";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { COMPANY } from "../data/site";

export default function CtaBanner() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 4,
            p: { xs: 4, md: 8 },
            color: "#FAF8F4",
            background:
              "radial-gradient(120% 80% at 0% 0%, rgba(200,146,61,0.45) 0%, rgba(200,146,61,0) 50%), linear-gradient(135deg, #0E1828 0%, #1B2A41 60%, #324A6B 100%)",
            boxShadow: "0 30px 80px rgba(14,24,40,0.25)",
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            sx={{
              position: "relative",
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ maxWidth: 600 }}>
              <Typography variant="overline" sx={{ color: "secondary.main", display: "block", mb: 1 }}>
                Free estimates · Insurance claims welcome
              </Typography>
              <Typography variant="h2" sx={{ color: "#FAF8F4", fontSize: { xs: "2rem", md: "2.75rem" } }}>
                Ready for a roof you can{" "}
                <Box component="span" sx={{ fontStyle: "italic", color: "secondary.main" }}>
                  stop worrying about
                </Box>
                ?
              </Typography>
              <Typography sx={{ color: "rgba(241,236,226,0.8)", mt: 2 }}>
                Tell us about your project — we&rsquo;ll have a real human at your door, usually within a couple of days.
              </Typography>
            </Box>
            <Stack direction="column" spacing={2} sx={{ width: { xs: "100%", md: "auto" } }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#0E1828",
                  fontWeight: 700,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                  "&:hover": {
                    bgcolor: "#F5F1E8",
                    boxShadow: "0 12px 26px rgba(0,0,0,0.24)",
                  },
                }}
              >
                Get my free estimate
              </Button>
              <Button
                href={COMPANY.phoneHref}
                variant="outlined"
                size="large"
                startIcon={<PhoneIcon />}
                sx={{
                  color: "#FAF8F4",
                  borderColor: "rgba(250,248,244,0.4)",
                  borderWidth: 2,
                  "&:hover": { borderColor: "#FAF8F4", borderWidth: 2, bgcolor: "rgba(250,248,244,0.05)" },
                }}
              >
                {COMPANY.phone}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
