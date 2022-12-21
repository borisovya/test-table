import React, {useEffect, useState} from 'react';
import {getData} from "../../Data/Data";
import s from "./SpreadSheetStyle.module.css"
import 'react-data-grid/lib/styles.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type ItemType = {
    "Date": string,
    "Price": string,
    "Volume": string
}

const Spreadsheet = () => {

    const [spreadsheetData, setSpreadsheetData] = useState<Array<ItemType>>([])
    useEffect(() => {
        setSpreadsheetData(getData())
    }, [])


    const fun = (obj: ItemType) => {
        const result = []
        for (const objKey in obj) {
            result.push(objKey)
        }
        return result
    }

    return <div className={s.container} id='table'>
        <TableContainer component={Paper} className={s.table}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {fun(spreadsheetData[0]).map(h => {
                            return (
                                <TableCell key={h}>
                                    <b>{h}</b>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {spreadsheetData.map((row) => (
                        <TableRow
                            className={s.tBody}
                            key={row.Date}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{row.Date}</TableCell>
                            <TableCell align="right">{row.Price}</TableCell>
                            <TableCell align="right">{row.Volume}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
};

export default Spreadsheet;