import React from 'react';


const ActionButton: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  hoverColor: string;
}> = ({ icon: Icon, label, onClick, hoverColor }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 text-gray-600 ${hoverColor} transition-colors cursor-pointer`}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default ActionButton;