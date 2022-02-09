import React , {useState , useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {requestUserTable , requestDeleteUserTable} from '../Redux/Home/action';
import { useDispatch , useSelector } from 'react-redux';
import history from '../Utility/history';
import AlertDialog from '../Component/Dialogue';

export default function HomePage() {

    const [isOpen , setIsOpen] = useState(false);
    const [selectedData , setSelectedData] = useState(null);
    const dispatch = useDispatch();
    const tableData = useSelector(state => state.home.userData); // Getting store value as mapstatetoprops
    
    useEffect(() => {
        dispatch(requestUserTable()); // Dispatch action as mapdispatchtoprops
    },[dispatch])


    const handleEditTable = (item) => {
        history.push({pathname: `/edit/${item.id}`, state: {results: item }});
    }

    const handleDeleteUser = (selectedrow) => {
      setIsOpen(!isOpen);
      setSelectedData(selectedrow);
    }

    // method for Delete record
    const handleDeleteRecord = () => {
       dispatch(requestDeleteUserTable(selectedData.id));
      setIsOpen(!isOpen);
    }

  return (
    <>
    <TableContainer component={Paper}>
      <h2>This is Record</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Start Location</TableCell>
            <TableCell align="right">End Location</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.startLocation}</TableCell>
              <TableCell align="right">{row.endLocation}</TableCell>
              <TableCell align="right"><button name="Edit button" onClick={() => handleEditTable(row)}>Edit</button></TableCell>
              <TableCell align="right"><button name="Save button" onClick={() => handleDeleteUser(row)}>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {
              isOpen && <AlertDialog isOpen = {isOpen} handleDeleteRecord={handleDeleteRecord} selectedData={selectedData} handleCloseDialogue={() => setIsOpen(!isOpen)} />
            }
    </>

  );
}
