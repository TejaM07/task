import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
  TablePagination,
} from "@material-ui/core";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "age", label: "Age", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 170 },

  // Add more columns as needed
];

const data = [
  { name: "Venki", age: 25, email: "venki@example.com" },
  { name: "Karthik", age: 30, email: "karthik@example.com" },
  { name: "Teja", age: 25, email: "teja@example.com" },
  { name: "Naresh", age: 30, email: "naresh@example.com" },
  { name: "ramesh", age: 25, email: "ramesh@example.com" },
  { name: "suresh", age: 30, email: "suresh@example.com" },
  { name: "hari", age: 25, email: "hari@example.com" },
  { name: "harish", age: 30, email: "harish@example.com" },
];

const ReusableTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="left"
                style={{ minWidth: column.minWidth }}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id} align="left">
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ReusableTable;
