import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button className="pill" onClick={onClick}>
      {label}
    </button>
  );
};

export default Pill;
