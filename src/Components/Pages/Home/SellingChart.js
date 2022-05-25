import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SellingChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-secondary font-bold text-center lg:my-10">Get selling information</h2>

            <ResponsiveContainer className="my-10" width="95%" height={400}>
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }} padding={{top:0,right:30,bottom:0, left:30}}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" fill="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend></Legend>
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default SellingChart;