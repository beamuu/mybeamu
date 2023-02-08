import { Paper, useTheme } from "@mui/material";
import { FC } from "react"

interface CardProps {
  children?: any;
}

export const Card: FC<CardProps> = (props) => {
  const theme = useTheme()
  return (
    <Paper></Paper>
  )
}