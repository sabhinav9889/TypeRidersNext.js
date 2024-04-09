"use client"
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
function Example({wpmList, graph}:any) {
  // const [wpmList, setWpmList] = useState<number[]>([]);
  // const [labList, setlabList] = useState<number[]>([]);
  const lis: number[] = new Array<number>(wpmList.length).fill(0);
  const temp: number[] = new Array<number>(wpmList.length).fill(0);
  for(let i = 0; i <wpmList.length; i++){
    lis[i] = i+1;
  }
  const myChartDiv = useRef(null);
  useEffect(() => {
    if(myChartDiv&&myChartDiv.current){
      if(!myChartDiv.current.getContext('2d')) return;
      const ctx = myChartDiv.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: graph,
          datasets: [{
            data: wpmList,
            label: "WPM",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
          {
            data: temp,
            label: "Time",
            fill: false,
          }
          ]
        },
      });
   }
  }, [wpmList]);
  return (
    <div className="w-1/2 h-80 absolute top-16 left-56 ml-44">
      {/* line chart */}
      {/* <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'> */}
          <canvas ref={myChartDiv}></canvas>
        {/* </div>
      </div> */}
    </div>
  )
}

export default Example;