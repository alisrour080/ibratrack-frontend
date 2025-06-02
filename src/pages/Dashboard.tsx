import React from 'react';
import SearchBar from '../components/Dashboard/SearchBar';
import { useState } from 'react';
import type { IRepair } from '../types/IRepair';
import RepairCard from '../components/Dashboard/RepairCard';
import EmptyState from '../components/Dashboard/EmptyState';

const Dashboard: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('All');
//     const [repairs, setRepairs] = useState<IRepair[]>([]);
//     const [loading, setLoading] = useState(false);

    const repairs: IRepair[] = [
        {
      id: '1',
      make: 'Toyota',
      model: 'Corolla',
      year: '2020',
      errorCode: 'N/A',
      errorDescription: 'Cylinder 1 missfire',
      fixProcess: 'Replaced coil'
    },
    {
      id: '2',
      make: 'Nissan',
      model: 'Sentra',
      year: '2019',
      errorCode: 'N/A',
      errorDescription: 'Key error',
      fixProcess: 'Replaced Antenna'
    },
    {
      id: '3',
      make: 'Toyota',
      model: 'Corolla',
      year: '2020',
      errorCode: 'P0100',
      errorDescription: 'Mass Air Flow Circuit.',
      fixProcess: 'Changed MAF'
    }
  ];
    // setRepairs(mockRepairs);

    const handleView = (id: string) => {
        console.log(`View repair with ID: ${id}`);
    }
    const handleEdit = (id: string) => {
        console.log(`Edit repair with ID: ${id}`);
    }
    const handleDelete = (id: string) => {
        console.log(`Delete repair with ID: ${id}`);
    }

    const FilteredRepairs = repairs.filter(repair => {
        const matchesSearch = searchTerm === '' ||
            repair.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repair.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repair.errorCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repair.errorDescription.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesYear = selectedYear === 'All' || repair.year === selectedYear;
        
            return matchesSearch && matchesYear;
    });

//     if(loading) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-lg text-gray-600">Loading diagnostics...</div>
//             </div>
//         );
//     }

    return (
        <div>
            <div className='min-h-screen bg-gray-50 p-6'>

                
                <div className='max-x-7xl mx-auto'>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        selectedYear={selectedYear}
                        onYearChange={setSelectedYear}
                        availableYears={['All', '2024', '2023', '2022']}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                        {FilteredRepairs.map(repair => (
                            <RepairCard
                                key={repair.id}
                                repair={repair}
                                onView={handleView}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))}
                    </div>

                    {FilteredRepairs.length === 0 && (
                        <EmptyState/>
                    )}
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;