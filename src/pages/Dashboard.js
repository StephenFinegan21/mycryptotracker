import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CryptoTable from '../component/CryptoTable';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>My Dashboard</h1>
            <CryptoTable />
            
        </div>
    )
}

export default Dashboard
