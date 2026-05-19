"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import { COMPANY, type Service, SERVICES } from "../data/site";

export default function ServicePage({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <Box>
      <Box
        component="section"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(200,146,61,0.18) 0%, rgba(200,146,61,0) 50%), linear-gradient(180deg, #FAF8F4 0%, #F2EEE6 100%)",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
              gap: { xs: 5, md: 8 },
              alignItems: "center",
            }}
          >
            <Box>
              <Chip
                label="Stone Ranch Roofing"
                sx={{
                  bgcolor: "rgba(200,146,61,0.12)",
                  color: "secondary.dark",
                  fontWeight: 600,
                  mb: 3,
                }}
              />
              <Typography variant="h1" sx={{ color: "primary.main", mb: 2, fontSize: { xs: "2.5rem", md: "4rem" } }}>
                {service.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "text.secondary", maxWidth: 580, mb: 4 }}>
                {service.description}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowForwardRoundedIcon />}
                >
                  Get a free estimate
                </Button>
                <Button
                  href={COMPANY.phoneHref}
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<PhoneIcon />}
                  sx={{ borderWidth: 2, "&:hover": { borderWidth: 2 } }}
                >
                  Call {COMPANY.phone}
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4 / 5",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(14,24,40,0.18)",
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 900px) 100vw, 540px"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 5, md: 10 },
            }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: "secondary.dark" }}>
                What&rsquo;s included
              </Typography>
              <Typography variant="h2" sx={{ color: "primary.main", mt: 1, mb: 3, fontSize: { xs: "2rem", md: "2.75rem" } }}>
                Workmanship you can{" "}
                <Box component="span" sx={{ fontStyle: "italic", color: "secondary.dark" }}>
                  count on
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Every {service.title.toLowerCase()} project includes the details below — plus the
                personal attention Stone Ranch is known for.
              </Typography>
            </Box>
            <Stack spacing={2.5}>
              {service.bullets.map((b) => (
                <Stack key={b} direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                  <CheckCircleRoundedIcon sx={{ color: "secondary.dark", mt: "2px" }} />
                  <Typography sx={{ color: "primary.main", fontWeight: 500 }}>{b}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container>
          <Stack direction="row" sx={{ mb: 5, flexWrap: "wrap", gap: 2, justifyContent: "space-between", alignItems: "flex-end" }}>
            <Box>
              <Typography variant="overline" sx={{ color: "secondary.dark" }}>
                More from Stone Ranch
              </Typography>
              <Typography variant="h2" sx={{ color: "primary.main", mt: 1, fontSize: { xs: "1.75rem", md: "2.5rem" } }}>
                Other services we offer
              </Typography>
            </Box>
            <Button component={Link} href="/contact" variant="outlined" color="primary" endIcon={<ArrowForwardRoundedIcon />}>
              Talk to a roofer
            </Button>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    overflow: "hidden",
                    border: "1px solid rgba(27,42,65,0.06)",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: "0 24px 60px rgba(14,24,40,0.12)" },
                  }}
                >
                  <Box sx={{ position: "relative", aspectRatio: "16 / 10" }}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 600px) 100vw, 320px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ color: "primary.main", mb: 0.5 }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {s.short}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
