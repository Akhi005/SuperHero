import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Sort from "@/components/Sort";
import Pagination from "@/components/Pagination";
import Card from "@/components/Card";
import { Spinner } from "@/components/Spinner";
import { Logo } from "@/components/Logo";
import PerPageCard from "@/components/PerPageCard";
import api from "@/utils/api";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("created");
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [matchType, setMatchType] = useState("partial");

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const filter = search
          ? matchType === "exact"
            ? `name = '${search}'`
            : `name ~ '${search}'`
          : "";
        const res = await api.get("/records", {
          params: {
            page,
            perPage,
            filter,
            sort,
          },
        });
        setHeroes(res.data.items);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroes();
  }, [page, perPage, search, sort, matchType]); 

  useEffect(() => {
    setPage(1);
  }, [perPage]);

  return (
    <div className="flex flex-col min-h-screen px-4 py-6 bg-[#0A0F2C]">
      <div className="w-full flex flex-col gap-4 md:flex-row justify-between items-center mb-8 p-4 shadow-2xl rounded-xl">
        <Logo />
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <SearchBar value={search} onChange={setSearch} />
          <select
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
            className="bg-gray-800 text-white p-1 rounded-md border border-gray-600">
            <option value="partial">Partial Match</option>
            <option value="exact">Exact Match</option>
          </select>
        </div>
      </div>
      <div className="text-center my-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
              The Ultimate Superhero Roster
            </h1>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Browse and discover heroes from every universe
            </p>
          </div>
          <div className="flex gap-3 justify-end w-full md:w-auto">
            <Sort value={sort} onChange={setSort} />
            <PerPageCard value={perPage} onChange={setPerPage} />
          </div>
        </div>
      </div>
      <div className="flex-1 px-2 sm:px-4 md:px-6 lg:px-8">
        {loading ? (
          <Spinner />
        ) : heroes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
            {heroes.map((hero) => (
              <Card key={hero.id} hero={hero} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-20 text-lg">
            No heroes found.
          </div>
        )}
      </div>
      <div className="mt-auto py-6 flex justify-center">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}