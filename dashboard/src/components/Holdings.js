import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => {
        // Handle both array response and object with holdings property
        const holdings = Array.isArray(res.data) ? res.data : res.data.holdings || [];
        setAllHoldings(holdings);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
        setError("Failed to load holdings. Please make sure the backend server is running.");
        setLoading(false);
      });
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  if (loading) {
    return (
      <>
        <h3 className="title">Holdings</h3>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Loading holdings...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3 className="title">Holdings</h3>
        <div style={{ padding: "20px", textAlign: "center", color: "#ff6b6b" }}>
          <p>{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {allHoldings.length === 0 ? (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>No holdings found. Database is not connected or no data available.</p>
        </div>
      ) : (
        <>
          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>

              {allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";
                
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className="row">
            <div className="col">
              <h5>
                29,875.<span>55</span>{" "}
              </h5>
              <p>Total investment</p>
            </div>
            <div className="col">
              <h5>
                31,428.<span>95</span>{" "}
              </h5>
              <p>Current value</p>
            </div>
            <div className="col">
              <h5>1,553.40 (+5.20%)</h5>
              <p>P&L</p>
            </div>
          </div>
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;