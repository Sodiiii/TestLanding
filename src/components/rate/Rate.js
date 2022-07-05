import React from "react";
import "./rate.css";

export const Rate = () => {
  return (
    <div className="rate_wrapper">
      <div className="stat">
        <h1 className="percentage">95%</h1>
        <div className="description">
          Сотрудников прошли технику безопасности
        </div>
      </div>
      <div className="rate_diagramm" />
    </div>
  );
};
