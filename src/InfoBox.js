import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@mui/material";

function InfoBox({
  active,
  isRecovered,
  isDeaths,
  title,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--cases"} ${
        isRecovered && "infoBox--recovered"
      } ${isDeaths && "infoBox--deaths"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases" ${
            isRecovered && "infoBox__cases--green"
          }`}
        >
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
