import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import queryString from "query-string";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";

export default function HistoricalSignals() {
  const [filters, setFilters] = useState({
    startDate: null,
    endDate: null,
    script: "",
    side: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  const [signals, setSignals] = useState([]);
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const mockData = useMemo(
    () => [
      { id: 1, script: "BTC/USDT", side: "BUY", status: "Closed", entry: 50000, exit: 51200, date: "2025-10-25" },
      { id: 2, script: "ETH/USDT", side: "SELL", status: "Open", entry: 3200, exit: "", date: "2025-10-24" },
      { id: 3, script: "SOL/USDT", side: "BUY", status: "Closed", entry: 150, exit: 175, date: "2025-10-22" },
      { id: 4, script: "XRP/USDT", side: "SELL", status: "Closed", entry: 0.5, exit: 0.45, date: "2025-10-20" },
    ],
    []
  );

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    setFilters({
      startDate: params.startDate ? new Date(params.startDate) : null,
      endDate: params.endDate ? new Date(params.endDate) : null,
      script: params.script || "",
      side: params.side || "",
      status: params.status || "",
      minPrice: params.minPrice || "",
      maxPrice: params.maxPrice || "",
    });
  }, []);

  useEffect(() => {
    const qs = queryString.stringify({
      ...filters,
      startDate: filters.startDate?.toISOString().split("T")[0],
      endDate: filters.endDate?.toISOString().split("T")[0],
    });
    window.history.replaceState(null, "", `?${qs}`);
  }, [filters]);

  useEffect(() => {
    let data = [...mockData];
    if (filters.startDate && filters.endDate) {
      data = data.filter(
        (d) =>
          new Date(d.date) >= filters.startDate && new Date(d.date) <= filters.endDate
      );
    }
    if (filters.script)
      data = data.filter((d) =>
        d.script.toLowerCase().includes(filters.script.toLowerCase())
      );
    if (filters.side) data = data.filter((d) => d.side === filters.side);
    if (filters.status) data = data.filter((d) => d.status === filters.status);
    if (filters.minPrice)
      data = data.filter((d) => d.entry >= Number(filters.minPrice));
    if (filters.maxPrice)
      data = data.filter((d) => d.entry <= Number(filters.maxPrice));

    data.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setSignals(data);
  }, [filters, mockData, sortField, sortOrder]);

  const pageCount = Math.ceil(signals.length / itemsPerPage);
  const currentItems = signals.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const handleExportCSV = () => {
    const csv = Papa.unparse(signals);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "historical_signals.csv");
  };

  const resetFilters = () => {
    setFilters({
      startDate: null,
      endDate: null,
      script: "",
      side: "",
      status: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Navbar />

      <div className="p-10">
        {/* ---------- FILTER BAR ---------- */}
        <div className="bg-white/10 backdrop-blur-lg border border-[#00FFFF]/30 rounded-2xl p-5 mb-8 
                        shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] 
                        transition-all duration-300 flex flex-wrap items-center gap-4">
          {/* Date Range */}
          <div className="flex items-center gap-2">
            <DatePicker
              selected={filters.startDate}
              onChange={(date) => setFilters({ ...filters, startDate: date })}
              selectsStart
              startDate={filters.startDate}
              endDate={filters.endDate}
              placeholderText="Start Date"
              className="bg-transparent border border-[#00FFFF]/40 text-white placeholder-gray-400 p-2 rounded-lg text-sm"
            />
            <DatePicker
              selected={filters.endDate}
              onChange={(date) => setFilters({ ...filters, endDate: date })}
              selectsEnd
              startDate={filters.startDate}
              endDate={filters.endDate}
              placeholderText="End Date"
              className="bg-transparent border border-[#00FFFF]/40 text-white placeholder-gray-400 p-2 rounded-lg text-sm"
            />
          </div>

          {/* Script name */}
          <input
            type="text"
            value={filters.script}
            onChange={(e) => setFilters({ ...filters, script: e.target.value })}
            placeholder="Script Name"
            className="bg-transparent border border-[#FF00FF]/40 text-white placeholder-gray-400 p-2 rounded-lg text-sm w-40"
          />

          {/* Side toggle */}
          <div className="flex items-center gap-2">
            {["BUY", "SELL"].map((side) => (
              <button
                key={side}
                onClick={() =>
                  setFilters({ ...filters, side: filters.side === side ? "" : side })
                }
                className={`px-3 py-1 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                  filters.side === side
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white"
                    : "border-[#888]/40 text-gray-300 hover:bg-white/10"
                }`}
              >
                {side}
              </button>
            ))}
          </div>

          {/* Status dropdown */}
          <Select
            className="w-36 text-sm text-black"
            placeholder="Status"
            options={[
              { value: "Open", label: "Open" },
              { value: "Closed", label: "Closed" },
            ]}
            value={filters.status ? { value: filters.status, label: filters.status } : null}
            onChange={(opt) =>
              setFilters({ ...filters, status: opt ? opt.value : "" })
            }
            isClearable
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "#00FFFF50",
                color: "white",
              }),
              singleValue: (base) => ({ ...base, color: "white" }),
              menu: (base) => ({ ...base, backgroundColor: "#1a1a2e" }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#302b63" : "transparent",
                color: "#00FFFF",
              }),
            }}
          />

          {/* Price range */}
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            placeholder="Min Entry"
            className="bg-transparent border border-[#FFD700]/40 text-white placeholder-gray-400 p-2 rounded-lg text-sm w-24"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            placeholder="Max Entry"
            className="bg-transparent border border-[#FFD700]/40 text-white placeholder-gray-400 p-2 rounded-lg text-sm w-24"
          />

          {/* Buttons */}
          <button
            onClick={() => setPage(0)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-white font-medium hover:scale-105 transition"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg border border-gray-400 text-gray-300 hover:bg-white/10"
          >
            Reset
          </button>
        </div>

        {/* ---------- TABLE ---------- */}
        <div className="bg-white/10 backdrop-blur-md border border-[#FF00FF]/30 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.15)] overflow-x-auto">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] font-semibold text-lg">
              Historical Signals
            </div>
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FF00FF] text-black font-medium hover:scale-105 transition-all"
            >
              Export CSV
            </button>
          </div>

          <table className="w-full text-sm text-left text-white/80">
            <thead className="bg-white/5 text-[#FFD700]">
              <tr>
                {["script", "side", "status", "entry", "exit", "date"].map((col) => (
                  <th
                    key={col}
                    onClick={() => {
                      setSortField(col);
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    }}
                    className="px-4 py-3 cursor-pointer select-none hover:text-[#00FFFF]"
                  >
                    {col.toUpperCase()}{" "}
                    {sortField === col ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((sig) => (
                <tr
                  key={sig.id}
                  className="border-b border-white/10 hover:bg-white/5 transition-all"
                >
                  <td className="px-4 py-2">{sig.script}</td>
                  <td className="px-4 py-2">{sig.side}</td>
                  <td className="px-4 py-2">{sig.status}</td>
                  <td className="px-4 py-2">{sig.entry}</td>
                  <td className="px-4 py-2">{sig.exit || "-"}</td>
                  <td className="px-4 py-2">{sig.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 flex justify-center">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={({ selected }) => setPage(selected)}
              containerClassName="flex gap-2"
              pageClassName="px-3 py-1 border border-white/20 rounded-md hover:bg-white/10"
              activeClassName="bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black border-none"
              previousLabel="<"
              nextLabel=">"
              previousClassName="px-3 py-1 border border-white/20 rounded-md hover:bg-white/10"
              nextClassName="px-3 py-1 border border-white/20 rounded-md hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
