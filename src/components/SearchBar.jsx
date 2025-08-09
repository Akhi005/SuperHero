import { IoSearch } from "react-icons/io5";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      <input
        type="text"
        placeholder="Search heroes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:w-[300px] md:w-[400px] pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-[#F5F9FF] text-gray-800 placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
