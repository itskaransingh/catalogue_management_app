import React from "react";
import { useAppContext } from "../context/AppContext";
import {Pie} from 'react-chartjs-2'

const Analytics = () => {

    const {analyticsdata} = useAppContext()

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="analytics" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="analytics"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex  gap-10 flex-col items-center">
          <div className="text-xl pb-4">Categories In Catalogue</div>
          </div>
          <div className="flex justify-center items-center">
            <Pie data={analyticsdata}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
