// pages/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@tremor/react";
import { Chart } from "chart.js/auto";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import Hrsg from "@/components/Hrsg";

export interface EngineData {
  id: number;
  engine1kw: number;
  engine1kwh: number;
  engine2kw: number;
  engine2kwh: number;
  engine3kw: number;
  engine3kwh: number;
  engine4kw: number;
  engine4kwh: number;
  engine5kw: number;
  engine5kwh: number;
  engine6kw: number;
  engine6kwh: number;
  engine7kw: number;
  engine7kwh: number;
  engine8kw: number;
  engine8kwh: number;
  takeoff1kw: number;
  takeoff1kwh: number;
  takeoff2kw: number;
  takeoff2kwh: number;
  takeoff3kw: number;
  takeoff3kwh: number;
  engine1: null | any;
  engine2: null | any;
  engine3: null | any;
  engine4: null | any;
  engine5: null | any;
  engine6: null | any;
  engine7: null | any;
  engine8: null | any;
}

async function getData() {
  try {
    const res = await fetch("/api/v1/powerhouse1", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("error: " + error);
  }
}

const Page = () => {
  const [data, setData] = useState<EngineData[]>([]);
  const [percentageUsedDataE1, setPercentageUsedDataE1] = useState("");
  const [percentageUsedDataE2, setPercentageUsedDataE2] = useState("");
  const [percentageUsedDataE3, setPercentageUsedDataE3] = useState("");
  const [percentageUsedDataE4, setPercentageUsedDataE4] = useState("");
  const [percentageUsedDataE5, setPercentageUsedDataE5] = useState("");
  const [percentageUsedDataE6, setPercentageUsedDataE6] = useState("");

  const refreshList = async () => {
    const result = await getData();
    setData(result.data);
  };

  useEffect(() => {
    refreshList();

    const intervalId = setInterval(() => {
      refreshList(); // Fetch data every 3 seconds
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine1kw);
      const totalCapacity = 900;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE1(percentageUsed);

      const ctx = document.getElementById("engine1") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);
  
  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine2kw);
      const totalCapacity = 900;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE2(percentageUsed);

      const ctx = document.getElementById("engine2") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine3kw);
      const totalCapacity = 1200;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE3(percentageUsed);

      const ctx = document.getElementById("engine3") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine4kw);
      const totalCapacity = 1200;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE4(percentageUsed);

      const ctx = document.getElementById("engine4") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine5kw);
      const totalCapacity = 900;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE5(percentageUsed);

      const ctx = document.getElementById("engine5") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      const values = data.map((item) => item.engine6kw);
      const totalCapacity = 1200;
      const totalValue = values.reduce((acc, curr) => acc + curr, 0);
      const remainingCapacity = totalCapacity - totalValue;
      const percentageUsed = ((totalValue / totalCapacity) * 100).toFixed(2);
      setPercentageUsedDataE6(percentageUsed);

      const ctx = document.getElementById("engine6") as HTMLCanvasElement;

      let chartStatus = Chart.getChart(ctx);
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              label: "Data from API",
              data: [totalValue, remainingCapacity],
              backgroundColor: ["#28B463", "#E5E8E8"],
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "80%",
          plugins: {
            legend: {
              position: "bottom",
            },
            tooltip: {
              enabled: false,
            },
          },
          animation: false,
        },
      });

      chart.update(); // Update the chart to apply changes
    }
  }, [data]);

  return (
    <div className="p-5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 1</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE1}%
              </div>
              <canvas id="engine1" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine1kw} kW</p>
                    <p>Energy {item.engine1kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 2</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE2}%
              </div>
              <canvas id="engine2" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine2kw} kW</p>
                    <p>Energy {item.engine2kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 3</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE3}%
              </div>
              <canvas id="engine3" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine3kw} kW</p>
                    <p>Energy {item.engine3kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 4</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE4}%
              </div>
              <canvas id="engine4" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine4kw} kW</p>
                    <p>Energy {item.engine4kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 5</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE5}%
              </div>
              <canvas id="engine5" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine5kw} kW</p>
                    <p>Energy {item.engine5kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-xl font-bold">Engine 6</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent className="flex justify-evenly">
            <div
              style={{
                width: "100px",
                height: "100px",
                float: "left",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "40px",
                  position: "absolute",
                  top: "55%",
                  left: "0",
                  marginTop: "-20px",
                  lineHeight: "19px",
                  textAlign: "center",
                }}
              >
                {percentageUsedDataE6}%
              </div>
              <canvas id="engine6" width="100" height="100" />
            </div>
            <div className="">
              {data.map((item) => {
                return (
                  <div key={item.id} className="text-sm">
                    <p>Load {item.engine6kw} kW</p>
                    <p>Energy {item.engine6kwh} kWh</p>
                  </div>
                );
              })}
              {/* <p className="text-xs text-muted-foreground">
                1500 total capacity in KW
              </p> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
