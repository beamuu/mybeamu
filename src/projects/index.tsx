import { projects } from "@/data/projects";
import { Container, Grid, Typography } from "@mui/material";
import { Page } from "../layouts/Page";
import { Each } from "./components/Each";

export const ProjectPage = () => {
  return (
    <Page>
      <Container>
        <Typography variant="h5">{"Nutchanon's Projects"}</Typography>
        <Typography variant="body2">These are my past projects.</Typography>
        <Grid container mt={4} spacing={2} rowSpacing={2}>
          {Object.keys(projects).map((key, index) => {
            const each = projects[key];
            if (!each) return null;
            return (
              <Grid item xs={12} sm={6} key={`proj-${index}`}>
                <Each {...each} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
};
