import { Bar  } from "react-chartjs-2";
import { Data } from "../../appState/dataState"
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   BarElement,
} from "chart.js";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   BarElement
);

const BarChart = ({ data }) => {
    const {storedData} = Data()
   
    const month = [
      "January", "February", "March","April","May","June","July","August","September","October","November","December",
   ]

   function getData () {

    return storedData.map(dataset => {
        let sum =0
        for (let datavalue of dataset.data) {
            sum += datavalue
        }
        return sum
    })
   }

   const chartData = {
      labels: month.slice(0, data.length),
      datasets: [
         {  
            data: getData(),
            fill: false,
            axis: 'y',
            tension: 0.1,
            backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(255, 159, 64, 0.2)",
               "rgba(255, 205, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(153, 102, 255, 0.2)",
               "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
               "rgb(255, 99, 132)",
               "rgb(255, 159, 64)",
               "rgb(255, 205, 86)",
               "rgb(75, 192, 192)",
               "rgb(54, 162, 235)",
               "rgb(153, 102, 255)",
               "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
         },
      ],
   };

   const chartOptions = {
      responsive: true,
      indexAxis: 'y',
      plugins: {
         legend: {
            position: "top",
         },
         
         title: {
            display: true,
            text: "Monthly Sales",
         },
      },
   };

   return (
      <div className="bg-white p-4 m-2 rounded-lg border-2 h-max">
         <Bar data={chartData} options={chartOptions} />
      </div>
   );
};

export default BarChart;
