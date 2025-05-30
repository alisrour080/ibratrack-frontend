import React from 'react';
import { Search } from 'lucide-react';


interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    selectedYear: string;
    onYearChange: (year: string) => void;
    availableYears: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({
    searchTerm,
    onSearchChange,
    selectedYear,
    onYearChange,
    availableYears=["All",'2024']
}) => {
    return(
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by brand, model, error code or description"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-black"
        />
      </div>
      
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white text-black"
      >
        {availableYears.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
    );
}    

export default SearchBar;
