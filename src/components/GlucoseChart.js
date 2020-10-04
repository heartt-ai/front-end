import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const GlucoseChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP"],
            datasets: [
                {
                    label: "Glucose",
                    borderColor: "rgba(253, 133, 168, 1)",
                    pointHoverBorderColor: "rgba(253, 133, 168, 1)",
                    pointBorderColor: "rgba(255, 92, 203, 1)",
                    pointBackgroundColor: "rgba(255, 92, 203, 1)",
                    pointHoverBackgroundColor: "rgba(255, 92, 203, 1)",
                    pointBorderWidth: 0,
                    pointHoverRadius: 3,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: false,
                    borderWidth: 3,
                    data: [50, 130, 20, 145, 10, 110, 60, 90, 40],
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

export default GlucoseChart;
