import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const BPChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
      datasets: [
        {
          label: "Blood Pressure",
          borderColor: "rgba(180, 180, 244, 1)",
          pointHoverBorderColor: "rgba(180, 70, 244, 1)",
          pointBorderColor: "rgba(180, 70, 244, 1)",
          pointBackgroundColor: "rgba(180, 70, 244, 1)",
          pointHoverBackgroundColor: "rgba(180, 70, 244, 1)",
          pointBorderWidth: 0,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 3,
          data: [80, 110, 30, 130, 70, 20, 110, 30, 130],
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 0,
              bottom: 0,
            },
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                  min: 0,
                  max: 150,
                },
                gridLines: {
                  drawTicks: false,
                  display: false,
                  drawBorder: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawTicks: false,
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default BPChart;
