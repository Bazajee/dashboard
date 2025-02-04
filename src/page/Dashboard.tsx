
import CountDataSet from "../component/ChartCard/countDataSet"
import AverageDataSetLentgh from "../component/ChartCard/AverageDataSet"
import GlobalAmount from "../component/ChartCard/GobalAmout"
import BarChart from "../component/Chart/BarChart"
import PolarChart from "../component/Chart/PolarArea"

import { Data } from "../appState/dataState"
import PieChart from "../component/Chart/PieChart"

const Dashboard = () => {
   const { storedData } = Data();

   return (
      <div className="container mx-auto p-6">
         <div className=" justify-start">
            <h1 className="text-start text-2xl font-semibold pl-3 mb-1 mt-1 text text-blue-600">
               Dashboard
            </h1>         
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CountDataSet />
            <AverageDataSetLentgh />
            <GlobalAmount data={storedData} />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 row-span-2 gap-3">
            <PolarChart data={storedData} />
            <div>
               <BarChart data={storedData} />
               <GlobalAmount data={storedData} />
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3">
            <PieChart data={storedData} />
         </div>
      </div>
   );
};
export default Dashboard
