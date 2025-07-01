// src/components/ChartRenderer.jsx
import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Register all required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const ChartRenderer = ({ type, data, options }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Cleanup function to destroy chart on unmount
        return () => {
            if (chartRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                chartRef.current.destroy();
            }
        };
    }, []);

    switch (type) {
        case 'bar':
            return <Bar ref={chartRef} data={data} options={options} />;
        case 'line':
            return <Line ref={chartRef} data={data} options={options} />;
        case 'pie':
            return <Pie ref={chartRef} data={data} options={options} />;
        default:
            return <div>Unsupported chart type</div>;
    }
};

export default ChartRenderer;