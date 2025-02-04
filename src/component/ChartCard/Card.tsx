import { Title } from "chart.js";


// Original card component
const CardChart = ({ data }) => {

  return (
    <div className="bg-white p-4 m-2 rounded-lg border-2">
      <div className="flex justify-start m-2">
        <h1
          className=" text-2xl font-bold"
        >{data.title}</h1>
      </div>
      <div
        className="m-2 flex text-6xl font-bold"
      >
        <div>{data.value}</div>
        {data.percent ?  <div>%</div> : <div/> }
      </div>
    </div>
  );
};

export default CardChart