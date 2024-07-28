import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { formatHeader } from "../../utils/utils";
import { HIGHLIGHTED_COLUMNS } from "../../utils/constant";

export default function BasicTable({ columns, rowData, path }) {
  console.log("ROW-DATA: ", rowData);
  console.log("COLUMN: ", columns);
  const isRowDataArrayOfObjects =
    rowData.length > 0 && typeof rowData[0] === "object";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#1C1C1C" }}>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="left" sx={{ whiteSpace: "nowrap" }}>
                <Typography sx={{ fontSize: 14, color: "#BCBCBC" }}>
                  {formatHeader(column)}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "#111111" }}>
          {isRowDataArrayOfObjects
            ? rowData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} align="left">
                      {column === "magic_number" ? (
                        <Link
                          style={{
                            fontSize: "14px",
                            color: "#d4d4d4",
                            textDecoration: "none",
                          }}
                          to={`/account/${row["account"]}/magic_no/${row[column]}`}
                        >
                          {row[column]}
                        </Link>
                      ) : (
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: HIGHLIGHTED_COLUMNS.includes(column)
                              ? row[column] < 0
                                ? "red"
                                : "green"
                              : "#d4d4d4",
                          }}
                        >
                          {row[column]}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : rowData.map((data, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell align="left">
                    <Link
                      style={{
                        fontSize: "14px",
                        color: "#d4d4d4",
                        textDecoration: "none",
                      }}
                      to={`/magic_no/${data}`}
                    >
                      {data}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
