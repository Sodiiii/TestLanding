import React from "react";
import "./stat.css";

export const Statistics = () => {
  return (
    <div className="stat_wrapper">
      <div className="stats">
        <div className="stats_icon" />
        <h1 className="stats_of"> 14 из 20</h1>
        <h4 className="stat_description">
          Сотрудников прошли аттестацию по технический безопасности во время
          работы за оборудованием
        </h4>
      </div>
    </div>
  );
};
