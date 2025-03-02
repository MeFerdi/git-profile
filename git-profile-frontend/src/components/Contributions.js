import React from "react";

const Contributions = ({ contributions, theme }) => {
  return (
    <div className="contributions" style={{ backgroundColor: theme.cardBackground }}>
      <h3>Total Contributions: {contributions}</h3>
    </div>
  );
};

export default Contributions;