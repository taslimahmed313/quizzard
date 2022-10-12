import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import './Statistics.css';

const Statistics = () => {
    const topics = useLoaderData();
    return (
      <div>
        <div className="line-chart">
          <ResponsiveContainer className={'rechart'} width='100%' height={400}>
            <LineChart  data={topics.data}>
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip></Tooltip>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Statistics;