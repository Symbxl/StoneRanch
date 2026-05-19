"use client";

import { Box, Chip, Container, Typography } from "@mui/material";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import SectionHeader from "./SectionHeader";
import { SERVICE_AREAS } from "../data/site";

export default function ServiceAreas() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container>
        <SectionHeader
          eyebrow="Serving Utah"
          title={
            <>
              Proudly serving the{" "}
              <Box component="span" sx={{ fontStyle: "italic", color: "secondary.dark" }}>
                entire state
              </Box>
            </>
          }
          subtitle="Headquartered in Murray, we travel the Wasatch Front and beyond — from Logan to St. George."
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.25,
            maxWidth: 980,
            mx: "auto",
          }}
        >
          {SERVICE_AREAS.map((area) => (
            <Chip
              key={area}
              icon={<PlaceRoundedIcon sx={{ color: "secondary.dark !important", fontSize: 16 }} />}
              label={area}
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(27,42,65,0.1)",
                color: "primary.main",
                fontWeight: 500,
                px: 0.5,
                py: 2,
                "&:hover": {
                  bgcolor: "rgba(200,146,61,0.08)",
                  borderColor: "secondary.main",
                },
              }}
            />
          ))}
        </Box>
        <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary", mt: 4 }}>
          Don&rsquo;t see your city? Give us a call — chances are good we cover it.
        </Typography>
      </Container>
    </Box>
  );
}
