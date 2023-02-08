import { Button, Container, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#ffffffa0",
        backdropFilter: "blur(20px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100vw",
        py: 2,
        zIndex: theme.zIndex.appBar,
        borderStyle: "solid",
        borderWidth: "0 0 1px 0",
        borderColor: theme.palette.divider,
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight={600}>
            Beamu
          </Typography>
          <Link href="mailto:nutchanon.chant@gmail.com">
            <Button size="small" color="info" variant="contained">Contact me</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
