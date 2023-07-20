"use client";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Dashboard = () => {
  const { data, err, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  console.log(isLoading, data);

  return <div>dashboard</div>;
};

export default Dashboard;
