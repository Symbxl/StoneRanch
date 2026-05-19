import type { Metadata } from "next";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContactForm from "../components/ContactForm";
import { COMPANY } from "../data/site";

export const metadata: Metadata = {
  title: "Contact Stone Ranch Roofing | Free Roofing Estimates in Utah",
  description:
    "Get in touch with Stone Ranch Roofing for a free inspection and estimate. Serving the entire state of Utah from Murray.",
};

const TRUST_BADGES = [
  { icon: <BoltRoundedIcon />, label: "Reply within 1 business day" },
  { icon: <VerifiedRoundedIcon />, label: "Free, no-pressure estimates" },
  { icon: <ShieldRoundedIcon />, label: "Licensed & insured in Utah" },
];

const NEXT_STEPS = [
  {
    n: "01",
    title: "We confirm your request",
    body: "A real person reviews your details and reaches out within one business day.",
  },
  {
    n: "02",
    title: "On-site inspection",
    body: "We walk the roof, document everything, and answer your questions — no pressure.",
  },
  {
    n: "03",
    title: "Written estimate",
    body: "You get a clear quote with materials, timeline, and warranty spelled out.",
  },
];

export default function ContactPage() {
  return (
    <Box>
      {/* HERO */}
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 9, md: 14 },
          pb: { xs: 7, md: 11 },
          color: "#FAF8F4",
          background:
            "radial-gradient(120% 80% at 100% 0%, rgba(200,146,61,0.35) 0%, rgba(200,146,61,0) 50%), linear-gradient(135deg, #0E1828 0%, #1B2A41 60%, #324A6B 100%)",
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
        <Container sx={{ position: "relative" }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.light",
              letterSpacing: "0.22em",
              fontWeight: 700,
            }}
          >
            Contact us
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "#FAF8F4",
              mt: 1.5,
              mb: 2.5,
              fontSize: { xs: "2.5rem", md: "4.25rem" },
              maxWidth: 900,
            }}
          >
            Let&rsquo;s talk about your{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: "secondary.main" }}
            >
              roof
            </Box>
            .
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(241,236,226,0.82)",
              maxWidth: 680,
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              lineHeight: 1.6,
            }}
          >
            Repair, replacement, or insurance claim — our team is ready to help.
            Free inspections statewide, usually within 48 hours of your call.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: { xs: 4, md: 5 } }}
          >
            <Button
              href={COMPANY.phoneHref}
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                bgcolor: "#ffffff",
                color: "#0E1828",
                fontWeight: 700,
                px: 3.5,
                py: 1.5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                "&:hover": { bgcolor: "#F5F1E8" },
              }}
            >
              Call {COMPANY.phone}
            </Button>
            <Button
              href="#estimate-form"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                color: "#FAF8F4",
                borderColor: "rgba(250,248,244,0.4)",
                borderWidth: 2,
                px: 3.5,
                py: 1.5,
                "&:hover": {
                  borderColor: "#FAF8F4",
                  borderWidth: 2,
                  bgcolor: "rgba(250,248,244,0.06)",
                },
              }}
            >
              Request an estimate
            </Button>
          </Stack>

          <Box
            sx={{
              mt: { xs: 5, md: 7 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 2,
              maxWidth: 900,
            }}
          >
            {TRUST_BADGES.map((b) => (
              <Box
                key={b.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <Box sx={{ color: "secondary.main", display: "flex" }}>
                  {b.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    color: "rgba(241,236,226,0.92)",
                  }}
                >
                  {b.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FORM + SIDEBAR */}
      <Box id="estimate-form" sx={{ py: { xs: 7, md: 12 } }}>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.3fr 1fr" },
              gap: { xs: 5, md: 6 },
              alignItems: "start",
            }}
          >
            <ContactForm />

            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: 120 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  color: "#FAF8F4",
                  background:
                    "linear-gradient(135deg, #1B2A41 0%, #324A6B 100%)",
                  boxShadow: "0 12px 32px rgba(14,24,40,0.18)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.light",
                    letterSpacing: "0.22em",
                    fontWeight: 700,
                  }}
                >
                  Prefer to talk?
                </Typography>
                <Typography
                  component="a"
                  href={COMPANY.phoneHref}
                  sx={{
                    display: "block",
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    fontSize: { xs: "1.7rem", md: "2rem" },
                    fontWeight: 700,
                    color: "#FAF8F4",
                    mt: 1,
                    mb: 1.5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {COMPANY.phone}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.92rem",
                    color: "rgba(241,236,226,0.78)",
                    lineHeight: 1.5,
                  }}
                >
                  Talk to a real Stone Ranch team member — no phone tree, no
                  pressure.
                </Typography>
              </Box>

              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(27,42,65,0.08)",
                  boxShadow: "0 4px 24px rgba(14,24,40,0.05)",
                }}
              >
                <Stack spacing={2.75}>
                  <InfoRow
                    icon={<EmailIcon />}
                    label="Email"
                    value={COMPANY.email}
                    href={`mailto:${COMPANY.email}`}
                  />
                  <InfoRow
                    icon={<PlaceRoundedIcon />}
                    label="Headquarters"
                    value={COMPANY.address}
                  />
                  <InfoRow
                    icon={<AccessTimeRoundedIcon />}
                    label="Office hours"
                    valueNode={
                      <Stack spacing={0.5} sx={{ mt: 0.5 }}>
                        {COMPANY.hours.map((h) => (
                          <Box
                            key={h.day}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: 2,
                              fontSize: "0.92rem",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{ color: "primary.main", fontWeight: 500 }}
                            >
                              {h.day}
                            </Box>
                            <Box
                              component="span"
                              sx={{ color: "text.secondary" }}
                            >
                              {h.time}
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    }
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* WHAT HAPPENS NEXT */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.dark",
                letterSpacing: "0.22em",
                fontWeight: 700,
              }}
            >
              What happens next
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                mt: 1.5,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              A simple, honest{" "}
              <Box
                component="span"
                sx={{ fontStyle: "italic", color: "secondary.dark" }}
              >
                three-step
              </Box>{" "}
              process
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {NEXT_STEPS.map((s) => (
              <Box
                key={s.n}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  borderRadius: 3,
                  bgcolor: "background.default",
                  border: "1px solid rgba(27,42,65,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-space-grotesk, sans-serif)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "rgba(200,146,61,0.18)",
                  }}
                >
                  {s.n}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    mb: 1,
                    color: "primary.main",
                    fontSize: "1.25rem",
                  }}
                >
                  {s.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                  {s.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

function InfoRow({
  icon,
  label,
  value,
  valueNode,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  valueNode?: React.ReactNode;
  href?: string;
}) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "rgba(200,146,61,0.12)",
          color: "secondary.dark",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: "text.secondary",
            fontSize: "0.7rem",
            letterSpacing: "0.16em",
            fontWeight: 600,
          }}
        >
          {label}
        </Typography>
        {valueNode ? (
          valueNode
        ) : href ? (
          <Typography
            component="a"
            href={href}
            sx={{
              display: "block",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "primary.main",
              textDecoration: "none",
              wordBreak: "break-word",
              "&:hover": { color: "secondary.dark" },
            }}
          >
            {value}
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "primary.main",
              mt: 0.25,
            }}
          >
            {value}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
