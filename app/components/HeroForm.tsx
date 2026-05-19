"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const HCAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ??
  "10000000-ffff-ffff-ffff-000000000001";

const ACCENT = "#1f6bff";
const TEXT_DARK = "#0F1A2C";
const BORDER = "rgba(15,26,44,0.14)";

type Tab = "form" | "schedule";

export default function HeroForm() {
  const router = useRouter();
  const [tab, setTab] = React.useState<Tab>("form");
  const [consent, setConsent] = React.useState(true);
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captchaToken) return;
    const params = new URLSearchParams();
    if (first) params.set("firstName", first);
    if (last) params.set("lastName", last);
    if (phone) params.set("phone", phone);
    const qs = params.toString();
    router.push(qs ? `/contact?${qs}` : "/contact");
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        bgcolor: "#fff",
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        boxShadow:
          "0 30px 80px rgba(14,24,40,0.18), 0 2px 6px rgba(14,24,40,0.06)",
        border: "1px solid rgba(15,26,44,0.06)",
        width: "100%",
        maxWidth: 560,
        mx: "auto",
      }}
    >
      <Stack direction="row" spacing={3} sx={{ mb: 2, alignItems: "center" }}>
        <TabPill
          active={tab === "form"}
          label="Fill out the form"
          onClick={() => setTab("form")}
        />
        <TabPill
          active={tab === "schedule"}
          label="Schedule a visit"
          onClick={() => setTab("schedule")}
        />
      </Stack>
      <Divider sx={{ mb: 3, borderColor: BORDER }} />

      <Typography
        component="h2"
        sx={{
          fontFamily:
            "var(--font-geist-sans), 'Geist', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
          fontWeight: 800,
          fontSize: { xs: "1.85rem", md: "2.25rem" },
          color: TEXT_DARK,
          lineHeight: 1.1,
          letterSpacing: "-0.025em",
          mb: 1.25,
        }}
      >
        Free Roof Inspection
      </Typography>
      <Typography
        sx={{
          color: TEXT_DARK,
          fontSize: "1rem",
          lineHeight: 1.5,
          mb: 0.5,
        }}
      >
        Excited to talk with you about{" "}
        <Box
          component="span"
          sx={{
            color: ACCENT,
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          your roofing project
        </Box>
      </Typography>
      <Typography sx={{ color: "rgba(15,26,44,0.6)", fontSize: "0.95rem", mb: 2.5 }}>
        Book an inspection below to see if we&rsquo;re a fit.
      </Typography>

      <PhoneField value={phone} onChange={setPhone} />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1.5 }}>
        <NameField
          placeholder="First name **"
          value={first}
          onChange={setFirst}
        />
        <NameField
          placeholder="Last name **"
          value={last}
          onChange={setLast}
        />
      </Stack>

      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HCaptcha
          sitekey={HCAPTCHA_SITE_KEY}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
        />
      </Box>

      <Stack direction="row" spacing={1} sx={{ mt: 2.5, alignItems: "flex-start" }}>
        <Checkbox
          checked={consent}
          onChange={(_, v) => setConsent(v)}
          size="small"
          sx={{
            p: 0,
            mt: "2px",
            color: BORDER,
            "&.Mui-checked": { color: ACCENT },
          }}
        />
        <Typography
          sx={{
            color: "rgba(15,26,44,0.7)",
            fontSize: "0.82rem",
            lineHeight: 1.5,
          }}
        >
          By entering your information, you consent to your data being saved in
          accordance with our{" "}
          <Box
            component="span"
            sx={{ color: TEXT_DARK, fontWeight: 700, textDecoration: "underline" }}
          >
            Terms
          </Box>{" "}
          &{" "}
          <Box
            component="span"
            sx={{ color: TEXT_DARK, fontWeight: 700, textDecoration: "underline" }}
          >
            Privacy Policy
          </Box>
          .
        </Typography>
      </Stack>

      <Button
        type="submit"
        disabled={!consent || !captchaToken}
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          mt: 2.5,
          width: "100%",
          py: 1.75,
          borderRadius: 2.5,
          textTransform: "none",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#fff",
          background: `linear-gradient(180deg, #2a7bff 0%, ${ACCENT} 100%)`,
          boxShadow: "0 10px 24px rgba(31,107,255,0.35)",
          "&:hover": {
            background: `linear-gradient(180deg, #1f6bff 0%, #1858d9 100%)`,
            boxShadow: "0 12px 28px rgba(31,107,255,0.45)",
          },
          "&.Mui-disabled": {
            background: "rgba(31,107,255,0.45)",
            color: "rgba(255,255,255,0.85)",
          },
        }}
      >
        Continue
      </Button>
    </Box>
  );
}

function TabPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <Stack
      direction="row"
      spacing={1}
      onClick={onClick}
      sx={{ cursor: "pointer", userSelect: "none", alignItems: "center" }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: active ? ACCENT : "transparent",
          border: active ? "none" : `1.5px solid ${BORDER}`,
        }}
      />
      <Typography
        sx={{
          fontWeight: active ? 700 : 500,
          color: active ? TEXT_DARK : "rgba(15,26,44,0.55)",
          fontSize: "0.95rem",
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
}

function PhoneField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${BORDER}`,
        borderRadius: 2.5,
        bgcolor: "#fff",
        px: 1.75,
        py: 0.25,
        transition: "border-color 120ms ease, box-shadow 120ms ease",
        "&:focus-within": {
          borderColor: ACCENT,
          boxShadow: `0 0 0 3px rgba(31,107,255,0.18)`,
        },
      }}
    >
      <Stack direction="row" spacing={0.75} sx={{ pr: 1.5, alignItems: "center" }}>
        <Box
          component="span"
          aria-hidden
          sx={{ fontSize: "1.25rem", lineHeight: 1 }}
        >
          🇺🇸
        </Box>
        <Typography sx={{ fontWeight: 600, color: TEXT_DARK }}>+1</Typography>
      </Stack>
      <Divider orientation="vertical" flexItem sx={{ mr: 1.5, borderColor: BORDER }} />
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="(555) 123-4567"
        inputMode="tel"
        type="tel"
        sx={{
          flex: 1,
          py: 1.5,
          fontSize: "1rem",
          color: TEXT_DARK,
          "& input::placeholder": { color: "rgba(15,26,44,0.45)", opacity: 1 },
        }}
      />
    </Box>
  );
}

function NameField({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Box
      sx={{
        flex: 1,
        border: `1px solid ${BORDER}`,
        borderRadius: 2.5,
        bgcolor: "#fff",
        px: 1.75,
        transition: "border-color 120ms ease, box-shadow 120ms ease",
        "&:focus-within": {
          borderColor: ACCENT,
          boxShadow: `0 0 0 3px rgba(31,107,255,0.18)`,
        },
      }}
    >
      <InputBase
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        sx={{
          width: "100%",
          py: 1.5,
          fontSize: "1rem",
          color: TEXT_DARK,
          "& input::placeholder": { color: "rgba(15,26,44,0.45)", opacity: 1 },
        }}
      />
    </Box>
  );
}

