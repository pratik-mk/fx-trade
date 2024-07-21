import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";

import "./style.css";
import { HIGHLIGHTED_COLUMNS } from "../../../utils/constant";
import { Link } from "react-router-dom";

const EATable = ({ rows, columns, isEven, rowData }) => {
  return (
    <TableContainer component={Paper} className="tableContainer">
      <Table className="table" aria-label="simple table">
        <TableHead className={isEven ? "headAlternative" : "headDefault"}>
          <TableRow className={isEven ? "headDefault" : "headAlternative"}>
            <TableCell colSpan={100} className="labelCell">
              <Typography sx={{ fontSize: 20 }}>{rowData}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{ whiteSpace: "nowrap" }}
                className={isEven ? "bodyDefault" : "bodyAlternative"}
                key={column.id}
              >
                <Typography sx={{ fontSize: 14 }}>{column.label}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={isEven ? "bodyDefault" : "bodyAlternative"}>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell
                  className={
                    HIGHLIGHTED_COLUMNS.includes(column.id)
                      ? row[column.id] < 0
                        ? "redText"
                        : "greenText"
                      : "defaultText"
                  }
                  key={column.id}
                >
                  {column.id === "magic_number" ? (
                    <Link
                      style={{ display: "flex", justifyContent: "center" }}
                      to={`/account/${rowData}/magic_no/${row[column.id]}`}
                    >
                      <Typography
                        sx={{
                          textDecoration: "underline",
                          color: "#F9BB01",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                      >
                        {row[column.id]}
                      </Typography>
                      <button className="linkButton">
                        <CandlestickChartOutlinedIcon
                          color="white"
                          fontSize="medium"
                        />
                      </button>
                    </Link>
                  ) : (
                    <Typography sx={{ fontSize: 14 }}>
                      {row[column.id]}
                    </Typography>
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
