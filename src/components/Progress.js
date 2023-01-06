import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export const data = {
  labels: [],
  datasets: [
    {
      label: ["illustration"],
      data: [35, 65],
      backgroundColor: ["rgba(255,85,41,255)", "rgba(59,33,50,255)"],
      borderColor: ["rgba(255,85,41,255)", "rgba(59,33,50,255)"],
      borderWidth: 1,
    },
  ],
};

const Progress = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div className="mx-5 my-2">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Project Progress</h4>
        </div>

        <div>
          <h4>...</h4>
        </div>
      </div>
      <div
        style={{ background: "#f7f7f7", padding: "24px", borderRadius: "10px" }}
      >
        <div className="d-flex justify-content-between  align-items-baseline">
          <div>
            <h6>Illustration Pattern</h6>
          </div>

          <div className="d-flex">
            <i class="fa-solid fa-download mx-3"></i>
            <i class="fa-solid fa-file-pen"></i>
          </div>
        </div>
        <div style={{ height: "200px", width: "200px" }}>
          <Doughnut
            options={{
              width: "200",
              height: "200",
              responsive: true,
              maintainAspectRatio: true,
            }}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
