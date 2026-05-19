"use client";

import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { TESTIMONIALS, GOOGLE_REVIEWS } from "../data/site";

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </Box>
  );
}

function Stars({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <Box
      sx={{ display: "inline-flex" }}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <StarRoundedIcon key={i} sx={{ color: "#F5B400", fontSize: size }} />
      ))}
    </Box>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        bgcolor: "secondary.main",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.02em",
        flexShrink: 0,
      }}
    >
      {initials}
    </Box>
  );
}

export default function Testimonials() {
  const [expanded, setExpanded] = React.useState<number | null>(null);

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 14 }, bgcolor: "background.default" }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              px: 2,
              py: 1,
              borderRadius: 999,
              border: "1px solid rgba(27,42,65,0.10)",
              bgcolor: "background.paper",
              boxShadow: "0 2px 10px rgba(14,24,40,0.04)",
            }}
          >
            <GoogleG size={18} />
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "text.primary",
                letterSpacing: "0.01em",
              }}
            >
              Google Reviews
            </Typography>
            <Stars count={5} size={16} />
            <Typography sx={{ fontSize: "0.85rem", fontWeight: 700 }}>
              {GOOGLE_REVIEWS.rating.toFixed(1)}
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{ textAlign: "center", color: "primary.main" }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              maxWidth: 560,
              color: "text.secondary",
              fontSize: "1rem",
              lineHeight: 1.6,
            }}
          >
            Don&apos;t just take our word for it — hear from the homeowners
            we&apos;ve protected across Utah.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 3.5 },
          }}
        >
          {TESTIMONIALS.map((t, idx) => {
            const isExpanded = expanded === idx;
            const isLong = t.quote.length > 180;
            return (
              <Box
                key={t.name}
                sx={{
                  position: "relative",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  border: "1px solid rgba(27,42,65,0.06)",
                  boxShadow: "0 4px 24px rgba(14,24,40,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  transition: "transform 220ms ease, box-shadow 220ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(14,24,40,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stars count={t.rating} size={20} />
                  <GoogleG size={20} />
                </Box>

                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    flex: 1,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: isExpanded ? "unset" : 5,
                    overflow: "hidden",
                  }}
                >
                  {t.quote}
                </Typography>

                {isLong && (
                  <Button
                    onClick={() => setExpanded(isExpanded ? null : idx)}
                    sx={{
                      alignSelf: "flex-start",
                      p: 0,
                      minWidth: "auto",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "secondary.dark",
                      "&:hover": { background: "transparent", color: "secondary.main" },
                    }}
                    disableRipple
                  >
                    {isExpanded ? "− Show less" : "+ Read more"}
                  </Button>
                )}

                <Box
                  sx={{
                    mt: "auto",
                    pt: 2,
                    borderTop: "1px solid rgba(27,42,65,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Avatar name={t.name} />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        color: "text.secondary",
                        mt: "2px",
                      }}
                    >
                      {t.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 4, md: 6 },
          }}
        >
          <Button
            component="a"
            href={GOOGLE_REVIEWS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GoogleG size={16} />}
            sx={{
              px: 3,
              py: 1.25,
              borderRadius: 999,
              border: "1px solid rgba(27,42,65,0.12)",
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.9rem",
              bgcolor: "background.paper",
              "&:hover": {
                bgcolor: "background.paper",
                borderColor: "rgba(27,42,65,0.24)",
                boxShadow: "0 6px 18px rgba(14,24,40,0.06)",
              },
            }}
          >
            View all reviews on Google
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
