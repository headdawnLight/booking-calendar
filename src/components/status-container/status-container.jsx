import "./status-container.css";
import React from "react";

const StatusContainer = () => {
  return (
    <div className="status-container">
      <span id="available">Müsait</span>
      <span id="booked">Dolu</span>
      <span id="pending">Ödeme Bekliyor</span>
      <span id="check">Giriş-Çıkış</span>
    </div>
  );
};

export default StatusContainer;
