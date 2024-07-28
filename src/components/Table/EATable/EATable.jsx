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
    <TableContainer component={Paper} className={styles.tableContainer} sx={{ border: "none" }}>
      <Table className={styles.table} aria-label="simple table" sx={{ border: "none" }}>
        <TableHead className={isEven ? styles.headAlternative : styles.headDefault} sx={{ border: "none" }}>
          <TableRow className={isEven ? styles.headDefault : styles.headAlternative} sx={{ border: "none" }}>
            <TableCell colSpan={100} className={styles.labelCell} sx={{ border: "none" }}>
              <Typography sx={{ fontSize: 24, fontWeight: "bold", border: "none",color:"#d4d4d4"}}>{rowData}</Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: "none" }}>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                className={isEven ? styles.bodyDefault : styles.bodyAlternative}
                sx={{ whiteSpace: "nowrap", textAlign: "center", fontSize: 20, fontWeight: "bold", border: "none" }}
              >
                <Typography sx={{ fontSize: 17, textAlign: "center", fontWeight: "bold", border: "none",color:"#d4d4d4" }}>
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={isEven ? styles.bodyDefault : styles.bodyAlternative} sx={{ border: "none" }}>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ border: "none" }}>
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
                    fontWeight: "bold",
                    border: "none"
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
                          border: "none"
                        }}
                      >
                        {row[column.id]}
                      </Typography>
                      <button className={styles.linkButton}>
                        <CandlestickChartOutlinedIcon fontSize="medium" />
                      </button>
                    </Link>
                  ) : (
                    <Typography sx={{ fontSize: 14, textAlign: "center", fontWeight: "bold", border: "none" }}>
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
