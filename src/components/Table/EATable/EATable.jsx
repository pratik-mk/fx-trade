import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import { Link } from "react-router-dom";
import { HIGHLIGHTED_COLUMNS } from "../../../utils/constant";

import styles from "./EATable.module.css";

const EATable = ({ rows, columns, isEven, rowData }) => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={styles.table} aria-label="simple table">
        <TableHead className={isEven ? styles.headAlternative : styles.headDefault}>
          <TableRow className={isEven ? styles.headDefault : styles.headAlternative}>
            <TableCell colSpan={100} className={styles.labelCell}>
              <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>{rowData}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{ whiteSpace: "nowrap", textAlign: "center", fontSize: 20, fontWeight: "bold" }}
                className={isEven ? styles.bodyDefault : styles.bodyAlternative}
                key={column.id}
              >
                <Typography sx={{ fontSize: 17, textAlign: "center", fontWeight: "bold" }}>
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={isEven ? styles.bodyDefault : styles.bodyAlternative}>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    textAlign: "center",
                    color: HIGHLIGHTED_COLUMNS.includes(column.id)
                      ? row[column.id] < 0
                        ? "red"
                        : "green"
                      : "#d4d4d4",
                    borderBottom: "none",
                    fontSize: 14,
                    fontWeight:"bold",
                  }}
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
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {row[column.id]}
                      </Typography>
                      <button className={styles.linkButton}>
                        <CandlestickChartOutlinedIcon fontSize="medium" />
                      </button>
                    </Link>
                  ) : (
                    <Typography sx={{ fontSize: 14, textAlign: "center", fontWeight: "bold" }}>
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
