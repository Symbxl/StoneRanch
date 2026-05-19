"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import { COMPANY, IMG, SERVICES } from "../data/site";

const SERVICE_LINKS = SERVICES.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = React.useState(true);
  const [servicesAnchor, setServicesAnchor] = React.useState<null | HTMLElement>(null);
  const servicesMenuOpen = Boolean(servicesAnchor);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 8,
  });

  const servicesActive = pathname?.startsWith("/services");
  const isHome = pathname === "/";
  const transparentMode = isHome && !scrolled;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: transparentMode
            ? "transparent"
            : scrolled
            ? "rgba(14,24,40,0.92)"
            : "rgba(14,24,40,0.78)",
          backdropFilter: transparentMode
            ? "none"
            : "saturate(180%) blur(16px)",
          WebkitBackdropFilter: transparentMode
            ? "none"
            : "saturate(180%) blur(16px)",
          color: "#fff",
          borderBottom:
            scrolled && !transparentMode
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
          boxShadow:
            scrolled && !transparentMode
              ? "0 6px 24px rgba(0, 0, 0, 0.25)"
              : "none",
          transition:
            "background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease, backdrop-filter 220ms ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: scrolled ? 148 : 158,
                md: scrolled ? 204 : 216,
              },
              gap: 2,
              transition: "min-height 220ms ease",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 138, md: 192 },
                  height: { xs: 138, md: 192 },
                  transition: "width 220ms ease, height 220ms ease",
                }}
              >
                <Image
                  src={IMG.logo}
                  alt="Stone Ranch Roofing logo"
                  fill
                  sizes="210px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </Box>
            </Link>

            <Box sx={{ flex: 1 }} />

            {!isMobile && (
              <Stack
                direction="row"
                spacing={0.25}
                sx={{ alignItems: "center" }}
              >
                <NavLink href="/" active={isActive(pathname, "/")}>
                  Home
                </NavLink>

                <Button
                  onClick={(e) => setServicesAnchor(e.currentTarget)}
                  endIcon={
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        transition: "transform 180ms ease",
                        transform: servicesMenuOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  }
                  disableRipple
                  sx={navButtonSx(Boolean(servicesActive))}
                >
                  Services
                </Button>

                <NavLink
                  href="/contact"
                  active={isActive(pathname, "/contact")}
                >
                  Contact
                </NavLink>
              </Stack>
            )}

            <Menu
              anchorEl={servicesAnchor}
              open={servicesMenuOpen}
              onClose={() => setServicesAnchor(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    mt: 1.25,
                    minWidth: 280,
                    borderRadius: 2.5,
                    border: "1px solid rgba(27, 42, 65, 0.08)",
                    boxShadow: "0 18px 48px rgba(14, 24, 40, 0.10)",
                    overflow: "hidden",
                    p: 0.5,
                  },
                },
                list: { sx: { p: 0 } },
              }}
            >
              {SERVICE_LINKS.map((s) => {
                const active = isActive(pathname, s.href);
                return (
                  <MenuItem
                    key={s.href}
                    component={Link}
                    href={s.href}
                    onClick={() => setServicesAnchor(null)}
                    sx={{
                      borderRadius: 1.5,
                      py: 1.1,
                      px: 1.5,
                      fontSize: "0.92rem",
                      fontWeight: active ? 600 : 500,
                      color: active ? "secondary.dark" : "text.primary",
                      "&:hover": {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                        color: "secondary.dark",
                      },
                    }}
                  >
                    {s.label}
                  </MenuItem>
                );
              })}
            </Menu>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                ml: 1.5,
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                startIcon={<PhoneIcon />}
                href={COMPANY.phoneHref}
                sx={{
                  fontWeight: 600,
                  boxShadow: "0 8px 20px rgba(200, 146, 61, 0.28)",
                  "&:hover": {
                    boxShadow: "0 12px 26px rgba(200, 146, 61, 0.38)",
                  },
                }}
              >
                {COMPANY.phone}
              </Button>
            </Box>

            {isMobile && (
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
                <IconButton
                  href={COMPANY.phoneHref}
                  aria-label={`Call ${COMPANY.phone}`}
                  sx={{
                    display: { xs: "inline-flex", sm: "inline-flex" },
                    color: "secondary.dark",
                    backgroundColor: alpha(theme.palette.secondary.main, 0.12),
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                    },
                  }}
                >
                  <PhoneIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => setOpen(true)}
                  edge="end"
                  aria-label="Open menu"
                  sx={{
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.16)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "86vw", sm: 400 },
              p: 0,
              backgroundColor: "background.default",
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            px: 2.5,
            py: 2,
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(27, 42, 65, 0.08)",
          }}
        >
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Box sx={{ position: "relative", width: 36, height: 36 }}>
              <Image
                src={IMG.logo}
                alt="Stone Ranch Roofing logo"
                fill
                sizes="36px"
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              Stone Ranch
            </Typography>
          </Stack>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Stack>

        <Box sx={{ px: 1.5, py: 1.5, flex: 1, overflowY: "auto" }}>
          <List sx={{ p: 0 }}>
            <DrawerLink
              href="/"
              label="Home"
              active={isActive(pathname, "/")}
              onClick={() => setOpen(false)}
            />

            <ListItem disablePadding sx={{ mt: 0.5 }}>
              <ListItemButton
                onClick={() => setServicesOpenMobile((s) => !s)}
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  px: 1.5,
                  color: servicesActive ? "secondary.dark" : "text.primary",
                }}
              >
                <ListItemText
                  primary="Services"
                  slotProps={{
                    primary: {
                      sx: { fontWeight: 600, fontSize: "1.05rem" },
                    },
                  }}
                />
                {servicesOpenMobile ? (
                  <ExpandLessRoundedIcon />
                ) : (
                  <ExpandMoreRoundedIcon />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={servicesOpenMobile} timeout="auto" unmountOnExit>
              <List sx={{ pl: 1.5, py: 0 }}>
                {SERVICE_LINKS.map((s) => (
                  <DrawerLink
                    key={s.href}
                    href={s.href}
                    label={s.label}
                    active={isActive(pathname, s.href)}
                    onClick={() => setOpen(false)}
                    nested
                  />
                ))}
              </List>
            </Collapse>

            <DrawerLink
              href="/contact"
              label="Contact"
              active={isActive(pathname, "/contact")}
              onClick={() => setOpen(false)}
            />
          </List>
        </Box>

        <Box
          sx={{
            px: 2.5,
            py: 2.5,
            borderTop: "1px solid rgba(27, 42, 65, 0.08)",
            backgroundColor: "background.paper",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PhoneIcon />}
            href={COMPANY.phoneHref}
          >
            {COMPANY.phone}
          </Button>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "text.secondary", lineHeight: 1.5 }}
          >
            {COMPANY.address}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 1,
              color: "text.secondary",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Open today · 8AM – 8PM
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button
      component={Link}
      href={href}
      disableRipple
      sx={navButtonSx(active)}
    >
      {children}
    </Button>
  );
}

function navButtonSx(active: boolean) {
  return {
    position: "relative",
    px: 1.75,
    py: 1,
    minWidth: "auto",
    color: active ? "#E5B45F" : "rgba(255,255,255,0.92)",
    fontWeight: active ? 600 : 500,
    fontSize: "0.92rem",
    borderRadius: 999,
    backgroundColor: "transparent",
    transition: "color 180ms ease, background-color 180ms ease",
    "&:hover": {
      color: "#E5B45F",
      backgroundColor: "rgba(229, 180, 95, 0.12)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      bottom: 2,
      transform: active
        ? "translateX(-50%) scaleX(1)"
        : "translateX(-50%) scaleX(0)",
      transformOrigin: "center",
      width: 18,
      height: 2,
      borderRadius: 2,
      backgroundColor: "#E5B45F",
      transition: "transform 220ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    "&:hover::after": {
      transform: "translateX(-50%) scaleX(1)",
    },
  } as const;
}

function DrawerLink({
  href,
  label,
  active,
  onClick,
  nested,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
  nested?: boolean;
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        href={href}
        onClick={onClick}
        sx={{
          borderRadius: 2,
          py: nested ? 1 : 1.25,
          px: 1.5,
          color: active ? "secondary.dark" : "text.primary",
          backgroundColor: active
            ? "rgba(200, 146, 61, 0.08)"
            : "transparent",
        }}
      >
        <ListItemText
          primary={label}
          slotProps={{
            primary: {
              sx: {
                fontWeight: active ? 600 : nested ? 500 : 600,
                fontSize: nested ? "0.95rem" : "1.05rem",
              },
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
