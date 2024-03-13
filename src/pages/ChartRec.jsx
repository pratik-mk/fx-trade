import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { recommendChartType } from "../common/chartRec";
import Bargraph from "../components/Charts/Bargraph";
import Piechart from "../components/Charts/Piechart";
import Linegraph from "../components/Charts/Linegraph";
import Scattergraph from "../components/Charts/Scattergraph";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ChartRec = () => {
  const [fileContent, setFileContent] = useState(null);

  // Example usage:
  const numericData = [10, 20, 30, 40];
  const categoricalData = ["A", "B", "C", "D"];
  const scatterPlotData = [
    { x: 10, y: 20 },
    { x: 15, y: 30 },
    { x: 20, y: 25 },
  ];
  const pieChartData = [
    { label: "Category 1", value: 30 },
    { label: "Category 2", value: 45 },
  ];

  console.log("Numeric Data:", recommendChartType(numericData));
  console.log("Categorical Data:", recommendChartType(categoricalData));
  console.log("Scatter Plot Data:", recommendChartType(scatterPlotData));
  console.log("Pie Chart Data:", recommendChartType(pieChartData));

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        // You can add your logic to handle JSON or CSV data here
        console.log(content);

        console.log("File Data:", recommendChartType(content));
        setFileContent(content);
      };

      // Assuming you want to read the file as text
      reader.readAsText(file);
    }
  };
  return (
    <div>
      <Typography variant="h2">Chart Recommender</Typography>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        type="file"
        accept=".json, .csv"
        onChange={handleFileUpload}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      {fileContent && (
        <div>
          <h3>File Content:</h3>
          <pre>{fileContent}</pre>
        </div>
      )}

      <Linegraph data={[2, 5.5, 2, 8.5, 1.5, 5]} />
      <Bargraph />
      <Piechart />
      <Scattergraph />
    </div>
  );
};

export default ChartRec;
