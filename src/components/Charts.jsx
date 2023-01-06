import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  AreaChart,
  Line,
  Area,
  BarChart,
  Bar,
  Treemap,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from "recharts";
import data from "./jsondata.json";

const pData = data;

function Charts() {
  return (
    <div>
      <h1>Charts</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pData}
          width={800}
          height={300}
          margin={{ top: 10, right: 30, left: 200, bottom: 5 }}
        >
          <XAxis dataKey="sector" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="likelihood" stroke="red" activeDot={{ r: 8 }} />
          <Line dataKey="relevance" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <h1>Area Chart for </h1>
      <AreaChart
        width={800}
        height={300}
        data={pData}
        margin={{
          top: 10,
          right: 30,
          left: 200,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="topic" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="likelihood"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>

      <LineChart
        data={pData}
        width={800}
        height={300}
        margin={{ top: 10, right: 30, left: 200, bottom: 5 }}
      >
        <XAxis dataKey="sector" interval={"preserveStartEnd"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey="intensity" activeDot={{ r: 8 }} />
      </LineChart>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 200,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="likelihood" fill="#8884d8" />
          <Bar dataKey="relevance" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      {/* <PieChart>
          <Pie dataKey="intensity" data={data} fill="#8884d8" label />
        </PieChart>  */}
    </div>
  );
}

export default Charts;
