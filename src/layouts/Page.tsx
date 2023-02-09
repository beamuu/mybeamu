import { Box } from "@mui/material";
import { FC } from "react";
import { Navbar } from "./Navbar";

interface PageProps {
  children?: any;
}
export const Page: FC<PageProps> = (props) => {
  return (
    <Box>
      <Navbar />
      <Box mt={14} mb={10}>{props.children}</Box>
    </Box>
  );
};
