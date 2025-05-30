import React from 'react';
import ActionButton from './ActionButton';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import type { IRepair } from '../../types/IRepair';


interface RepairCardProps {
    repair: IRepair
    onView: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
}


const RepairCard: React.FC<RepairCardProps> = ({ repair, onView, onDelete, onEdit }) => {
    return (
         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Card header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 capitalize">
            {repair.make.toLowerCase()} {repair.model.toLowerCase()}
          </h3>
          <p className="text-sm text-gray-600">Year: {repair.year}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500">Error Code:</span>
          <p className="text-sm font-medium text-gray-900">{repair.errorCode}</p>
        </div>
      </div>

      {/* Error details */}
      <div className="space-y-3 mb-6 flex-grow">
        <div>
          <span className="text-xs text-gray-500 block mb-1">Error Description:</span>
          <p className="text-sm text-gray-800">{repair.errorDescription}</p>
        </div>
        
        <div>
          <span className="text-xs text-gray-500 block mb-1">Fix Process:</span>
          <p className="text-sm text-gray-800">{repair.fixProcess}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between pt-4 border-t border-gray-100 mt-auto">
        <div className="flex space-x-3">
          <ActionButton
            icon={Eye}
            label="View"
            onClick={() => onView(repair.id)}
            hoverColor="hover:text-blue-600"
          />
          
          <ActionButton
            icon={Edit2}
            label="Edit"
            onClick={() => onEdit(repair.id)}
            hoverColor="hover:text-green-600"
          />
          
          <ActionButton
            icon={Trash2}
            label="Delete"
            onClick={() => onDelete(repair.id)}
            hoverColor="hover:text-red-600"
          />
        </div>
      </div>
    </div>
    );
}
export default RepairCard;