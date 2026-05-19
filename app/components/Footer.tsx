"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import { COMPANY, IMG, NAV_ITEMS } from "../data/site";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0E1828", color: "rgba(241,236,226,0.85)", pt: { xs: 6, md: 10 }, pb: 4 }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr 1fr 1fr" },
            gap: { xs: 5, md: 6 },
          }}
        >
          <Box>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Box sx={{ position: "relative", width: 48, height: 48 }}>
                <Image src={IMG.logo} alt="Stone Ranch Roofing" fill sizes="48px" style={{ objectFit: "contain" }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "#FAF8F4",
                }}
              >
                Stone Ranch Roofing
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ mt: 2.5, maxWidth: 360, color: "rgba(241,236,226,0.65)" }}>
              Utah&rsquo;s trusted residential and commercial roofing company. Honest, reliable
              builders protecting homes and businesses across the state.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                sx={{ color: "rgba(241,236,226,0.85)", "&:hover": { color: "secondary.main" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                sx={{ color: "rgba(241,236,226,0.85)", "&:hover": { color: "secondary.main" } }}
              >
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Services
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 2 }}>
              {NAV_ITEMS.filter((n) => n.href.startsWith("/services")).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(241,236,226,0.85)", "&:hover": { color: "#fff" } }}
                  >
                    {n.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Company
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 2 }}>
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#fff" } }}>Home</Typography>
              </Link>
              <Link href="/#about" style={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#fff" } }}>About</Typography>
              </Link>
              <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#fff" } }}>Contact</Typography>
              </Link>
              <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                <Typography variant="body2" sx={{ "&:hover": { color: "#fff" } }}>Free estimate</Typography>
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Get in touch
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <PhoneIcon sx={{ color: "secondary.main", mt: "2px" }} fontSize="small" />
                <Box>
                  <Typography
                    component="a"
                    href={COMPANY.phoneHref}
                    variant="body2"
                    sx={{ color: "#FAF8F4", textDecoration: "none", fontWeight: 600 }}
                  >
                    {COMPANY.phone}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <EmailIcon sx={{ color: "secondary.main", mt: "2px" }} fontSize="small" />
                <Typography
                  component="a"
                  href={`mailto:${COMPANY.email}`}
                  variant="body2"
                  sx={{ color: "rgba(241,236,226,0.85)", textDecoration: "none" }}
                >
                  {COMPANY.email}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                <PlaceRoundedIcon sx={{ color: "secondary.main", mt: "2px" }} fontSize="small" />
                <Typography variant="body2" sx={{ color: "rgba(241,236,226,0.85)" }}>
                  {COMPANY.address}
                </Typography>
              </Stack>
              <Box>
                <Typography variant="overline" sx={{ color: "secondary.main", display: "block", mt: 1 }}>
                  Hours
                </Typography>
                {COMPANY.hours.map((h) => (
                  <Stack key={h.day} direction="row" sx={{ maxWidth: 240, justifyContent: "space-between" }}>
                    <Typography variant="body2">{h.day}</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(241,236,226,0.65)" }}>
                      {h.time}
                    </Typography>
                  </Stack>
                ))}
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3,
            borderTop: "1px solid rgba(241,236,226,0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(241,236,226,0.5)" }}>
            © {new Date().getFullYear()} Stone Ranch Roofing. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(241,236,226,0.5)" }}>
            Licensed & insured · Murray, Utah
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
