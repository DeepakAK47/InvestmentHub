// import React from "react";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from "recharts";

// const data = [
//   { name: "Mon", price: 100 },
//   { name: "Tue", price: 120 },
//   { name: "Wed", price: 90 },
//   { name: "Thu", price: 150 },
//   { name: "Fri", price: 130 },
// ];

// export default function MarketOverview() {
//   return (
//     <div className="p-4 bg-white rounded-2xl shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
