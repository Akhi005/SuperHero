export default function PerPageCard({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="bg-[#F5F9FF] cursor-pointer text-gray-800 rounded-lg p-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" >
      <option value={3}>5 per page</option>
      <option value={6}>6 per page</option>
      <option value={9}>9 per page</option>
      <option value={12}>12 per page</option>
    </select>
  );
}
