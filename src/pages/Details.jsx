import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner";
import { Logo } from "@/components/Logo";
import { IoArrowBack } from "react-icons/io5";
import api from "@/utils/api";

export default function HeroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await api.get(`/records/${id}`);
        setHero(res.data);
      } catch (err) {
        console.error("Error fetching hero details:", err);
      }
    };
    fetchHero();
  }, [id]);

  if (!hero) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex items-center justify-between mb-6">
          <Logo />
          <button
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-md rounded-lg"
          >
            <IoArrowBack className="text-lg" />
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-12 items-start ">
          <div className="relative">
            <img
              src={hero.image.url}
              alt={`${hero.name} Image`}
              className="w-full h-[700px] object-cover rounded-3xl shadow-2xl border-4 border-blue-600"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm rounded-b-3xl px-6 py-4">
              <h1 className="text-4xl font-bold text-yellow-400">
                {hero.name}
              </h1>
              {hero.biography["full-name"] && (
                <p className="italic text-sm text-gray-300">
                  {hero.biography["full-name"]}
                </p>
              )}
              <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                {Object.entries(hero.powerstats).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-blue-700/20 backdrop-blur text-white px-3 py-2 rounded-md shadow-sm capitalize"
                  >
                    {key}:
                    <span className="font-bold text-blue-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                Appearance
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 text-md text-gray-200">
                <li>
                  <strong>Gender:</strong> {hero.appearance.gender}
                </li>
                <li>
                  <strong>Race:</strong> {hero.appearance.race}
                </li>
                <li>
                  <strong>Height:</strong> {hero.appearance.height.join(" / ")}
                </li>
                <li>
                  <strong>Weight:</strong> {hero.appearance.weight.join(" / ")}
                </li>
                <li>
                  <strong>Hair:</strong> {hero.appearance["hair-color"]}
                </li>
                <li>
                  <strong>Eyes:</strong> {hero.appearance["eye-color"]}
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Biography
              </h2>
              <ul className="text-md space-y-1 text-gray-200">
                <li>
                  <strong>Place of Birth:</strong>
                  {hero.biography["place-of-birth"]}
                </li>
                <li>
                  <strong>First Appearance:</strong>
                  {hero.biography["first-appearance"]}
                </li>
                <li>
                  <strong>Publisher:</strong> {hero.biography.publisher}
                </li>
                <li>
                  <strong>Alignment:</strong> {hero.biography.alignment}
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">
                Work
              </h2>
              <p className="text-md text-gray-200">
                <strong>Occupation:</strong> {hero.work.occupation}
              </p>
              <p className="text-md text-gray-200">
                <strong>Base:</strong> {hero.work.base}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">
                Connections
              </h2>
              <p className="text-md text-gray-200">
                <strong>Group Affiliation:</strong>
                {hero.connections["group-affiliation"]}
              </p>
              <p className="text-md text-gray-200">
                <strong>Relatives:</strong> {hero.connections.relatives}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
