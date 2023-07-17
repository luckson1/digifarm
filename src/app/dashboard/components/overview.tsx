"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    month: "Jan",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Feb",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Mar",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Apr",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "May",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Jun",
    total: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Jul",
    total: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Aug",
    total: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Sep",
    total: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Oct",
    total: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Nov",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    month: "Dec",
   purchases: Math.floor(Math.random() * 50000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `KES  ${value}`}
        />
        <Bar dataKey="purchases" fill='#29a34e' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}