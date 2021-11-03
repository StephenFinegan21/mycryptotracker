import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Dashboard = () => {
    return (
        <div>
            <h1>My Dashboard</h1>
            <div className="crypto-grid">
                <table>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Profit/Loss</th>
                    </tr>
                    <tr>
                        <td>img</td>
                        <td>Bitcoin</td>
                        <td>€100</td>
                        <td>+40</td>
                    </tr>
                </table>


            </div>
        </div>
    )
}

export default Dashboard
