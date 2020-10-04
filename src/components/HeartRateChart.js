import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const HeartRateChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
            datasets: [
                {
                    label: "Heart Rate",
                    borderColor: "rgba(18, 216, 227, 1)",
                    pointHoverBorderColor: "rgba(18, 216, 227, 1)",
                    pointBorderColor: "rgba(58, 233, 245, 1)",
                    pointBackgroundColor: "rgba(58, 233, 245, 1)",
                    pointHoverBackgroundColor: "rgba(180, 70, 244, 1)",
                    pointBorderWidth: 0,
                    pointHoverRadius: 3,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: false,
                    borderWidth: 3,
                    data: [20, 90, 70, 120, 60, 20, 80, 130, 20],
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

export default HeartRateChart;
