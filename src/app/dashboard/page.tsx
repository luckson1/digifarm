
import { Metadata } from "next"




export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}


import React from 'react'
import DashboardPage from "./components/dashboard"

export default function Dashboard() {
  return (
    <DashboardPage />
  )
}
