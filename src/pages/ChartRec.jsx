import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        // You can add your logic to handle JSON or CSV data here
        console.log(content);
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
      {/* <div>
        <input type="file" accept=".json, .csv" onChange={handleFileUpload} />
        {fileContent && (
          <div>
            <h3>File Content:</h3>
            <pre>{fileContent}</pre>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ChartRec;
