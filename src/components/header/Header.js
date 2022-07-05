import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="person" />
      <div className="header_bar">
        <div className="header_tool">
          <div className="tool_icon_study" />
          <h5 className="tool_name">Обучение</h5>
        </div>
        <div className="header_tool">
          <div className="tool_icon_rate" />
          <h5 className="tool_name">Оценка</h5>
        </div>
        <div className="header_tool">
          <div className="tool_icon_carier" />
          <h5 className="tool_name">Карьера</h5>
        </div>
        <div className="header_tool">
          <div className="tool_icon_adapt" />
          <h5 className="tool_name">Адаптация</h5>
        </div>
        <div className="header_tool">
          <div className="tool_icon_analys" />
          <h5 className="tool_name">Аналитика</h5>
        </div>
        <div className="header_tool">
          <div className="tool_icon_staff" />
          <h5 className="tool_name">Сотрудники</h5>
        </div>
      </div>
      <div className="buttons">
        <div className="call_btn btn"></div>
        <div className="exit_btn btn"></div>
      </div>
    </div>
  );
};
