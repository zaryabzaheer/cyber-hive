'use client'
import { useEffect, useRef } from 'react';
import { Images } from "@/assets/assets";
import Image from "next/image";
import Chart from "chart.js/auto";

const Stats = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = [0, 2, 1, 3, 2.5, 4, 5];
    const yValues = [0, 2, 1, 3, 2.5, 4, 5];

    const ctx = document.getElementById("myChart").getContext("2d");

    // Check if a chart instance exists and destroy it
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "",
          borderColor: "#445D6E",
          data: yValues,
          borderWidth: 5,
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          y: {
            ticks: { min: 0, max: 5 }
          }
        }
      }
    });
  }, []); // Empty dependency array to run only once after the component mounts

  return (
    <section className="graph-stat">
      <div className="container-fluid container-width">
        <div className="graph-stat-heading-area text-center">
          <h3>Damage statistics from cyberattacks.</h3>
          <p>Cyberattacks continue to pose significant threats, causing billions of dollars in financial
              losses globally each year. reputational damage and potential legal consequences as a result
              of data breaches and other cybersecurity incidents.</p>
        </div>
        <div className="graph-stat-content">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="graph-stat-content-info d-flex align-items-center justify-content-between">
                <div className="graph-stat-content-img">
                  <Image src={Images.dangerIcon} className="img-fluid" alt="danger icon" />
                </div>
                <p className="mb-0">The most known cyber attack in 2017 disabled 10% of USA computers</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="graph-stat-content-info d-flex align-items-center justify-content-between">
                <div className="graph-stat-content-img">
                  <Image src={Images.hackingicon} className="img-fluid" alt="hackingicon" />
                </div>
                <p className="mb-0">In our country, cyberattacks occur every 14 seconds</p>
              </div>
            </div>
          </div>
        </div>
        <div className="graph-chart">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </section>
  );
}

export default Stats;
