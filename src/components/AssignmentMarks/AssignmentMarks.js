import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AssignmentMarks = () => {
    
const data = [
    {
      name: 'Page A',
      marks: 58,
      quiz: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      marks: 60,
      quiz: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      marks: 60,
      quiz: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      marks: 60,
      quiz: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      marks: 60,
      quiz: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      marks: 60,
      quiz: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      marks: 60,
      quiz: 4300,
      amt: 2100,
    },
  ];
    return (
        <div>
            
            <LineChart  width={500}
            height={300}
            data={data}>
           

            <XAxis dataKey="quiz" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="marks" stroke="#8884d8"/>
            <Line type="monotone" dataKey="quiz" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;