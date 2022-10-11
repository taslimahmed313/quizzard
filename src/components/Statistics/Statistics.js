import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './Statistics.css';

const Statistics = () => {
    const topics = useLoaderData();
    return (
      <div>
        <div className="line-chart">
          <LineChart width={300} height={300}  data={topics.data}>
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