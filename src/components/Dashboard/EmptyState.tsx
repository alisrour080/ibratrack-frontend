import React from "react";


const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">No diagnostics found matching your criteria.</p>
      <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter settings.</p>
    </div>
  );
};

export default EmptyState;