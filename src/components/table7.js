import React from 'react';
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const axios = require('axios');

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'rollno', label: 'RollNo', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'mobile',
    label: 'Mobile',
    minWidth: 170,
    align: 'right',
  },
  { id: 'email2', label: 'Email2', align: 'right', minWidth: 170 },
  { id: 'email3', label: 'Email3', align: 'right', minWidth: 170 },
  { id: 'email4', label: 'Email4', align: 'right', minWidth: 170 },
  { id: 'email5', label: 'Email5', align: 'right', minWidth: 170 },
];

function createData(name, rollno, email, mobile,email2, email3, email4,email5) {
  return { name, rollno, email, mobile,email2, email3, email4,email5};
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxWidth:'100%',
    maxHeight: '100%',
  },
});

export default function Table7() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [row,setRow] = React.useState([]);

  useEffect( () => {
    async function fetching () {
      try {
        const rows = [];
        const response = await axios.get('https://node.ecell-iitkgp.org/comp/getAllDataOfTable?tableName=gamesman_reg_iit');
        response.data.map(e => {
          rows.push(createData(e.name_iit1,e.roll1,e.email_iit1,e.mobile_iit1,e.email_iit2,e.email_iit3,e.email_iit4,e.email_iit5));
        })
        setRow(rows);
      } catch (error) {
        console.error(error);
      }
    }
    fetching();
    
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((r) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={r.code}>
                  {columns.map((column) => {
                    const value = r[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
