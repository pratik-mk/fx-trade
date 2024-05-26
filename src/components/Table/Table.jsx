import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { MAGIC_NUMBER_PATH } from "../../utils/constant";

export default function BasicTable({ columns, rowData, path }) {
  const isRowDataArrayOfObjects =
    rowData.length > 0 && typeof rowData[0] === "object";
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="left">
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isRowDataArrayOfObjects
            ? rowData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <TableCell key={colIndex} align="left">
                      {column === "magic_number" ? (
                        <Link
                          to={`/account/${row["account"]}/magic_no/${row[column]}`}
                        >
                          {row[column]}
                        </Link>
                      ) : (
                        row[column]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : rowData.map((data, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell align="left">
                    <Link to={`/magic_no/${data}`}>{data}</Link>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
