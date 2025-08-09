import { Link } from "react-router-dom";

export default function Card({ hero }) {
  return (
    <Link to={`/records/${hero.id}`} className="group">
      <div className="flex flex-col justify-between bg-[#F5F9FF] rounded-xl shadow-md h-[400px] transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-xl border border-transparent hover:border-blue-400">
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={hero.image.url}
            alt={hero.name}
            className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold text-blue-900 truncate">
            {hero.name}
          </h2>

          {hero.biography["full-name"] && (
            <p className="text-blue-700 text-sm italic truncate">
              {hero.biography["full-name"]}
            </p>
          )}

          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-800">Publisher:</span>
            {hero.biography.publisher}
          </p>

          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            {Object.entries(hero.powerstats).map(([key, value]) => (
              <span
                key={key}
                className="bg-blue-100 text-blue-800 font-medium px-2 py-1 rounded-full shadow-sm"
              >
                <span className="capitalize">{key}</span>: {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
