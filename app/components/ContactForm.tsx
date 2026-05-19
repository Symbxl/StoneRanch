"use client";

import * as React from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { SERVICES } from "../data/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Alert
        severity="success"
        sx={{ borderRadius: 3, fontSize: "1rem", p: 3 }}
      >
        <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Thanks — your request is in.</Typography>
        <Typography variant="body2">
          A member of the Stone Ranch team will reach out within one business day to schedule your free inspection.
        </Typography>
      </Alert>
    );
  }

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      bgcolor: "#FAF8F4",
      "& fieldset": { borderColor: "rgba(27,42,65,0.12)" },
      "&:hover fieldset": { borderColor: "rgba(27,42,65,0.28)" },
    },
  } as const;

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        bgcolor: "background.paper",
        p: { xs: 3, md: 4.5 },
        borderRadius: 3,
        border: "1px solid rgba(27,42,65,0.08)",
        boxShadow: "0 12px 40px rgba(14,24,40,0.08)",
      }}
    >
      <Typography variant="h4" sx={{ color: "primary.main", mb: 0.75 }}>
        Request your free estimate
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 3.5 }}>
        Tell us a little about your project and we&rsquo;ll be in touch within one business day.
      </Typography>
      <Stack spacing={2.25}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField label="First name" name="firstName" required fullWidth sx={fieldSx} />
          <TextField label="Last name" name="lastName" required fullWidth sx={fieldSx} />
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField type="email" label="Email" name="email" required fullWidth sx={fieldSx} />
          <TextField label="Phone" name="phone" required fullWidth sx={fieldSx} />
        </Stack>
        <TextField label="Property address" name="address" fullWidth sx={fieldSx} />
        <TextField select label="What can we help with?" name="service" defaultValue="" fullWidth sx={fieldSx}>
          <MenuItem value="">Select a service</MenuItem>
          {SERVICES.map((s) => (
            <MenuItem key={s.slug} value={s.slug}>
              {s.title}
            </MenuItem>
          ))}
          <MenuItem value="other">Something else</MenuItem>
        </TextField>
        <TextField
          label="Tell us about the project"
          name="message"
          multiline
          minRows={4}
          fullWidth
          sx={fieldSx}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            alignSelf: { xs: "stretch", sm: "flex-start" },
            px: 4,
            py: 1.5,
            bgcolor: "primary.dark",
            color: "#FAF8F4",
            fontWeight: 700,
            boxShadow: "0 8px 20px rgba(14,24,40,0.20)",
            "&:hover": {
              bgcolor: "primary.main",
              boxShadow: "0 12px 26px rgba(14,24,40,0.28)",
            },
          }}
        >
          Send my request
        </Button>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", mt: 0.5 }}
        >
          We&rsquo;ll never share your info — used only to schedule your free
          estimate.
        </Typography>
      </Stack>
    </Box>
  );
}
