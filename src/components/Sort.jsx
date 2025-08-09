export default function Sort({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full sm:w-auto p-1 rounded-lg border border-gray-300 bg-[#F5F9FF] text-gray-800 
                 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" >
      <option value="name">Name A-Z</option>
      <option value="-name">Name Z-A</option>
      <option value="created">Oldest First</option>
      <option value="-created">Newest First</option>
    </select>
  );
}
