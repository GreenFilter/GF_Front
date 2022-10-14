import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '09/18',
    측정량: 200,
    // amt: 2400,
  },
  {
    name: '09/21',
    측정량: 150,
    // amt: 2210,
  },
  {
    name: '09/23',
    측정량: 100,
    // amt: 2290,
  },
  {
    name: '10/01',
    측정량: 110,
    // amt: 2000,
  },
  {
    name: '10/10',
    측정량: 160,
    // amt: 2181,
  },
];

export function amount() {
  return `${data[data.length - 1].측정량}`;
}

const percent = () => {
  return Math.round(
    ((data[data.length - 1].측정량 - data[data.length - 2].측정량) /
      data[data.length - 2].측정량) *
      100,
  );
};

export function plma() {
  // if (percent() >= 0) {
  return `${percent()}%`;
  // } else {
  //   return `${Math.abs(percent())}%`;
  // }
}

console.log(data[data.length - 1].측정량, plma());

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#000" />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar
            yAxisId="left"
            dataKey="측정량"
            fill="#527B5F"
            barSize={30}
            radius={30}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
