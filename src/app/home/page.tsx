"use client";

import FinanceCard from "@/components/FinanceCard";
import Task from "@/components/Task";
import BarLineChart from "@/components/BarLineChart";
import Transactions from "@/components/Transactions";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Home() {

  return (
    <>
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div className="grid w-full h-full xl:pl-[300px]">
        <Header />
      </div>
      <div className="xl:pl-[300px]">
        <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <FinanceCard />
          <Task />
        </div>
        <div className="mx-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <BarLineChart />
          <Transactions />
        </div>
      </div>
    </>
  );
}
