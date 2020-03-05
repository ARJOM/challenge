import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(day1, day2, day3, day4, day5, day6, day7) {
    return { day1, day2, day3, day4, day5, day6, day7 };
}

const rows = [
    createData(20, 21, 20, 29, 20, 18, 23),
    createData(16, 22, 19, 18, 23, 24, 22),
    createData('18%', '15%', '23%', '12%', '16%', '43%', '61%'),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Segunda</TableCell>
                        <TableCell align="center">Terça</TableCell>
                        <TableCell align="center">Quarta</TableCell>
                        <TableCell align="center">Quinta</TableCell>
                        <TableCell align="center">Sexta</TableCell>
                        <TableCell align="center">Sábado</TableCell>
                        <TableCell align="center">Domingo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="center">{row.day1}</TableCell>
                            <TableCell align="center">{row.day2}</TableCell>
                            <TableCell align="center">{row.day3}</TableCell>
                            <TableCell align="center">{row.day4}</TableCell>
                            <TableCell align="center">{row.day5}</TableCell>
                            <TableCell align="center">{row.day6}</TableCell>
                            <TableCell align="center">{row.day7}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}