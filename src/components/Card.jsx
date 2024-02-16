import React, { useState } from "react";
import "../styles/Card.css";
import Chart from "./Chart";
import List from "./List";

const Card = () => {
  const [plan, setPlan] = useState(32);
  const [complete, setComplete] = useState(7);
  const [placed, setPlaced] = useState(6);

  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <p className="card-text">Planned vs Completed Visits</p>
          </div>
        </div>
        <div className="card-body">
          <div className="card-left">
            <div className="chart">
              <Chart plan={plan} complete={complete} placed={placed} />
            </div>
          </div>

          <div className="card-right">
              <table>
                <tr>
                  <td>
                    <div className="list-data">
                      <span className="list-text">Planned visits</span>
                      <span className="list-num">{plan}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="list-data">
                      <span className="list-text">Completed visits</span>
                      <span className="list-num">{complete}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="selected-data">
                      <span className="selected-text">Placed Orders</span>
                      <span className="selected-num">{placed}</span>
                    </div>
                  </td>
                </tr>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
