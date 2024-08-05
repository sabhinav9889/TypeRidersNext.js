"use client"
import { useEffect, useState } from "react";
import { Chart } from "chart.js";
function Example({wpmList, graph}:any) {
  // const [wpmList, setWpmList] = useState<number[]>([]);
  // const [labList, setlabList] = useState<number[]>([]);
  const lis: number[] = new Array<number>(wpmList.length).fill(0);
  const temp: number[] = new Array<number>(wpmList.length).fill(0);
  for(let i = 0; i <wpmList.length; i++){
    lis[i] = i+1;
  }
  useEffect(() => {
    const ele = document.getElementById('myChart') as HTMLCanvasElement;
    var ctx = ele.getContext('2d');
    if(!ctx) return;
    var myChart = new Chart(ctx, {
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
  }, [wpmList]);
  return (
    <div className="sm:w-1/2 3/4 h-80 absolute z-30">
          <canvas id='myChart'></canvas>
    </div>
  )
}

export default Example;