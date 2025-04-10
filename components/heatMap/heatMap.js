import React, { useEffect, useState } from "react";
import "./heatmap.scss";

const Heatmap = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Simulate API response with submission data
    const simulatedData = {
      "2024-08-10": 1,
      "2025-03-01": 5,
      "2025-03-02": 2,
      "2025-03-03": 3,
      "2025-03-04": 1,
      "2025-03-06": 4,
    };
    setData(simulatedData);
  }, []);

  const generateHeatmap = () => {
    const days = [];
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split("T")[0];
      days.push({
        date: dateStr,
        count: data[dateStr] || 0,
        month: d.getMonth(),
      });
    }

    return days;
  };

  const getColorClass = (count) => {
    if (count >= 5) return "color-4";
    if (count >= 3) return "color-3";
    if (count >= 1) return "color-2";
    return "color-0";
  };

  const days = generateHeatmap();
  const weeks = [];
  const monthLabels = [];

  for (let i = 0; i < days.length; i += 7) {
    const week = days.slice(i, i + 7);
    const firstDay = week[0];
    const month = firstDay?.month;
    if (
      monthLabels.length === 0 ||
      monthLabels[monthLabels.length - 1]?.month !== month
    ) {
      monthLabels.push({ index: weeks.length, month });
    }
    weeks.push(week);
  }

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="heatmap-wrapper">
      <h2>Contributions in the past year</h2>
      <div className="heatmap">
        {weeks.map((week, i) => {
          const isNewMonth = monthLabels.find((m) => m.index === i);
          return (
            <div
              key={i}
              className={`week${isNewMonth ? " new-month" : ""}`}
              style={isNewMonth ? { marginLeft: "8px" } : {}}
            >
              {week.map((day, j) => (
                <div
                  key={j}
                  className={`day ${getColorClass(day.count)}`}
                  title={`${day.date}: ${day.count} submissions`}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="months">
        {weeks.map((_, i) => {
          const label = monthLabels.find((m) => m.index === i);
          return (
            <div key={i} className="month-label">
              {label ? monthNames[label.month] : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Heatmap;
