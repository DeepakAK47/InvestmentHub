import React,{useState,useEffect} from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";


const Positions = () => {
  // We set the useEffect here so that if we change in the mongoDB then that change must also seen here.
  const [allPositions, setallPositions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions")
      .then((res) => {
        // Handle both array response and object with positions property
        const positions = Array.isArray(res.data) ? res.data : res.data.positions || [];
        setallPositions(positions);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
        setError("Failed to load positions. Please make sure the backend server is running.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h3 className="title">Positions</h3>
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Loading positions...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3 className="title">Positions</h3>
        <div style={{ padding: "20px", textAlign: "center", color: "#ff6b6b" }}>
          <p>{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      {allPositions.length === 0 ? (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>No positions found. Database is not connected or no data available.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>

            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;  