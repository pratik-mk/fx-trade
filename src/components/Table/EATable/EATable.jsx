import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

import "./style.css";

const EATable = ({ rows, columns, isEven, rowData }) => {
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table className="table" aria-label="simple table">
        <TableHead className={isEven ? "headAlternative" : "headDefault"}>
          <TableRow className={isEven ? "headDefault" : "headAlternative"}>
            <TableCell colSpan={100} className="labelCell">
              {rowData}
            </TableCell>
          </TableRow>
          <TableRow>
            {columns.map((column) => (
              <TableCell className="labelCell" key={column.id}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell
                  className={`${
                    row[column.id] < 0 ? "redText" : "greenText"
                  } alignCenter`}
                  key={column.id}
                >
                  {column.id === "magic_number" ? (
                    <button className="linkButton">
                      {row[column.id]} <CandlestickChartIcon />
                    </button>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EATable;
