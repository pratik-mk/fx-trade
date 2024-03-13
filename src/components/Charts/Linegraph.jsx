import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Linegraph({ data }) {
  return (
    <LineChart
      series={[
        {
          data: data,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
