import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
    const topics = useLoaderData();
    return (
      <div>
        <div>
          <LineChart width={500} height={300} data={topics.data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </LineChart>
        </div>
      </div>
    );
};

export default Statistics;