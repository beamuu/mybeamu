import {
  Paper,
  Box,
  Stack,
  Typography,
  useTheme,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { BsGithub } from "react-icons/bs";
export const Each: FC<EachProjectCardProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            backgroundImage: `url(${props.imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderStyle: props.disableImgBorder ? "none" : "solid",
            borderColor: theme.palette.divider,
            borderWidth: "1px",
            borderRadius: "6px",
          }}
        ></Box>
        <Stack>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="body1" fontSize={12}>
            {props.description}
          </Typography>
        </Stack>
      </Stack>
      <Box my={3} minHeight="100px">
        <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
          {props.labels
            ? props.labels.map((l, i) => (
                <Chip
                  label={l}
                  variant="filled"
                  size="small"
                  sx={{
                    backgroundColor: "#e6f6ff",
                    color: "#2252ba",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  key={`label-${props.title}-{i}`}
                />
              ))
            : null}
        </Stack>
      </Box>
      <Box mt={5}>
        <Divider />
        <Box pt={1}>
          <Stack direction="row" justifyContent="end" spacing={1}>
            {props.demoUrl ? (
              <Link href={props.demoUrl}>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    borderRadius: 100,
                    textTransform: "uppercase",
                    gap: "8px",
                  }}
                >
                  Demo Available
                </Button>
              </Link>
            ) : null}

            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{
                fontSize: 10,
                fontWeight: 700,
                borderRadius: 100,
                textTransform: "uppercase",
                gap: "8px",
              }}
            >
              View on GitHub <BsGithub size="14px" />
            </Button>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};
