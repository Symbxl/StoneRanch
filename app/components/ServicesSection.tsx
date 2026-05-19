"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { COMPANY, SERVICES, type Service } from "../data/site";
import SectionHeader from "./SectionHeader";

const iconMap = {
  Home: HomeRoundedIcon,
  Build: BuildRoundedIcon,
  Business: BusinessRoundedIcon,
  Water: WaterDropRoundedIcon,
  Foundation: FoundationRoundedIcon,
};

function ServiceCard({
  service,
  wide = false,
}: {
  service: Service;
  wide?: boolean;
}) {
  const Icon = iconMap[service.icon];
  const highlights = service.bullets.slice(0, 3);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 4,
        border: "1px solid rgba(27, 42, 65, 0.06)",
        boxShadow: "0 8px 30px rgba(14, 24, 40, 0.05)",
        transition:
          "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 280ms ease, border-color 280ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 70px rgba(14, 24, 40, 0.16)",
          borderColor: "rgba(200, 146, 61, 0.35)",
        },
        "&:hover .service-image": {
          transform: "scale(1.06)",
        },
        "&:hover .service-arrow": {
          transform: "translateX(4px)",
        },
        "&:hover .service-cta": {
          color: "#1B2A41",
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={`/services/${service.slug}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: wide ? "row" : "column" },
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: wide ? { xs: "16 / 10", md: "auto" } : "4 / 3",
            width: wide ? { xs: "100%", md: "46%" } : "100%",
            minHeight: wide ? { xs: 280, md: 420 } : 0,
            flexShrink: 0,
          }}
        >
          <Box
            className="service-image"
            sx={{
              position: "absolute",
              inset: 0,
              transition: "transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes={
                wide
                  ? "(max-width: 900px) 100vw, 50vw"
                  : "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
              }
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(14,24,40,0) 40%, rgba(14,24,40,0.55) 100%)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              display: "flex",
              alignItems: "center",
              gap: 1.25,
            }}
          >
            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #FAF8F4 100%)",
                display: "grid",
                placeItems: "center",
                color: "secondary.dark",
                boxShadow:
                  "0 14px 30px rgba(14,24,40,0.22), inset 0 0 0 1px rgba(200,146,61,0.2)",
              }}
            >
              <Icon sx={{ fontSize: 28 }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: wide ? 5 : 3.5 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.dark",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                display: "block",
                mb: 1,
              }}
            >
              {wide ? "Featured Service" : "Service"}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                fontSize: wide
                  ? { xs: "1.75rem", md: "2.25rem" }
                  : { xs: "1.5rem", md: "1.75rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                mb: 1.5,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: wide ? "1.05rem" : "1rem",
                lineHeight: 1.65,
              }}
            >
              {wide ? service.description : service.short}
            </Typography>
          </Box>

          <Stack
            component="ul"
            spacing={1}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              mt: 0.5,
            }}
          >
            {highlights.map((b) => (
              <Stack
                key={b}
                component="li"
                direction="row"
                spacing={1.25}
                sx={{ alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    mt: "3px",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: "rgba(200, 146, 61, 0.14)",
                    color: "secondary.dark",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Box
            className="service-cta"
            sx={{
              mt: "auto",
              pt: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "secondary.dark",
              fontWeight: 600,
              transition: "color 200ms ease",
            }}
          >
            <Typography
              component="span"
              sx={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              Explore {service.title.toLowerCase()}
            </Typography>
            <ArrowForwardRoundedIcon
              className="service-arrow"
              sx={{
                fontSize: 18,
                transition:
                  "transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            />
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: "background.default" }}
    >
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title={
            <>
              Roofing services built for{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", color: "secondary.dark" }}
              >
                Utah weather
              </Box>
            </>
          }
          subtitle="From a single missing shingle to a full commercial re-roof, our team handles every project with the same level of craftsmanship and care."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {SERVICES.map((s, i) => {
            const isLast = i === SERVICES.length - 1;
            const isOrphan = isLast && SERVICES.length % 2 === 1;
            return (
              <Box
                key={s.slug}
                sx={{
                  gridColumn: isOrphan
                    ? { xs: "auto", md: "1 / -1" }
                    : "auto",
                }}
              >
                <ServiceCard service={s} wide={isOrphan} />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            mx: "auto",
            maxWidth: 760,
            position: "relative",
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            overflow: "hidden",
            background:
              "linear-gradient(135deg, #1B2A41 0%, #324A6B 100%)",
            color: "#ffffff",
            boxShadow: "0 24px 60px rgba(14,24,40,0.18)",
          }}
        >
          {/* Decorative gold accent */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,146,61,0.35) 0%, rgba(200,146,61,0) 70%)",
              pointerEvents: "none",
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              bottom: -80,
              left: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(200,146,61,0.2) 0%, rgba(200,146,61,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            sx={{
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="overline"
                sx={{ color: "secondary.light", letterSpacing: "0.18em" }}
              >
                No-cost, no-pressure
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mt: 0.5,
                  color: "#ffffff",
                  fontSize: { xs: "1.5rem", md: "1.85rem" },
                }}
              >
                Get a free roof inspection in 24 hours
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "1rem",
                }}
              >
                We&rsquo;ll walk the roof, document the condition, and send a written quote — no obligation.
              </Typography>
            </Box>

            <Stack
              spacing={1.5}
              sx={{
                width: { xs: "100%", md: "auto" },
                flexShrink: 0,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  whiteSpace: "nowrap",
                  fontWeight: 700,
                  boxShadow: "0 10px 24px rgba(200,146,61,0.35)",
                }}
              >
                Schedule my inspection
              </Button>
              <Button
                component="a"
                href={COMPANY.phoneHref}
                variant="text"
                startIcon={<PhoneRoundedIcon />}
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  justifyContent: { xs: "flex-start", md: "center" },
                  "&:hover": {
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                Or call {COMPANY.phone}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
