import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {name: '', uv: 20, pv: 2400, amt: 2400},
    {name: '', uv: 21, pv: 2400, amt: 2400},
    {name: '', uv: 20, pv: 2400, amt: 2400},
    {name: '', uv: 29, pv: 2400, amt: 2400},
    {name: '', uv: 20, pv: 2400, amt: 2400},
    {name: '', uv: 18, pv: 2400, amt: 2400},
    {name: '', uv: 23, pv: 2400, amt: 2400},
];


const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>

);

export default function SimpleTable() {
    return(
        <div>
            {renderLineChart}
        </div>
    )

}
