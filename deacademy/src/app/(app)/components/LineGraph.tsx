import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const lineChartData = {
    labels: [
        "February",
        "March",
        "April",
        "May",
    ],
    datasets: [
        {
            label: "Value",
            data: [0.2, 0.15, 0.21, 0.27],
            borderColor: "rgb(147 51 234)",
        }
    ]
}

export const LineGraph = () => {

    return ( <Line data={lineChartData} /> )
}

