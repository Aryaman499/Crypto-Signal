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
        (d) => new Date(d.date) >= filters.startDate && new Date(d.date) <= filters.endDate
      );
    }
    if (filters.script)
      data = data.filter((d) => d.script.toLowerCase().includes(filters.script.toLowerCase()));
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
    <div className="min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-['JetBrains_Mono',monospace] relative">
      {/* Subtle grid + noise background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>

      <Navbar />

      <div className="p-10 relative z-10">
        {/* ---------- FILTER BAR ---------- */}
        <div className="bg-[#111]/80 border border-[#222] rounded-md p-5 mb-8 flex flex-wrap items-center gap-4 shadow-[0_0_20px_rgba(0,255,153,0.05)]">
          {/* Date Range */}
          <div className="flex items-center gap-2">
            <DatePicker
              selected={filters.startDate}
              onChange={(date) => setFilters({ ...filters, startDate: date })}
              selectsStart
              startDate={filters.startDate}
              endDate={filters.endDate}
              placeholderText="Start Date"
              className="bg-[#0b0b0b] border border-[#333] text-[#00ff99] placeholder-gray-500 p-2 rounded-sm text-xs"
            />
            <DatePicker
              selected={filters.endDate}
              onChange={(date) => setFilters({ ...filters, endDate: date })}
              selectsEnd
              startDate={filters.startDate}
              endDate={filters.endDate}
              placeholderText="End Date"
              className="bg-[#0b0b0b] border border-[#333] text-[#00ff99] placeholder-gray-500 p-2 rounded-sm text-xs"
            />
          </div>

          {/* Script name */}
          <input
            type="text"
            value={filters.script}
            onChange={(e) => setFilters({ ...filters, script: e.target.value })}
            placeholder="Script Name"
            className="bg-[#0b0b0b] border border-[#333] text-[#e0e0e0] placeholder-gray-600 p-2 rounded-sm text-xs w-40"
          />

          {/* Side toggle */}
          <div className="flex items-center gap-2">
            {["BUY", "SELL"].map((side) => (
              <button
                key={side}
                onClick={() => setFilters({ ...filters, side: filters.side === side ? "" : side })}
                className={`px-3 py-1 rounded-sm text-xs border border-[#333] ${
                  filters.side === side
                    ? "bg-[#00ff99] text-[#0d0d0d]"
                    : "text-gray-400 hover:bg-[#1a1a1a]"
                }`}
              >
                {side}
              </button>
            ))}
          </div>

          {/* Status dropdown */}
          <Select
            className="w-36 text-xs text-black"
            placeholder="Status"
            options={[
              { value: "Open", label: "Open" },
              { value: "Closed", label: "Closed" },
            ]}
            value={filters.status ? { value: filters.status, label: filters.status } : null}
            onChange={(opt) => setFilters({ ...filters, status: opt ? opt.value : "" })}
            isClearable
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#0f0f0f",
                borderColor: "#333",
                color: "white",
                minHeight: "32px",
              }),
              singleValue: (base) => ({ ...base, color: "#00ff99" }),
              menu: (base) => ({ ...base, backgroundColor: "#111" }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#1a1a1a" : "transparent",
                color: "#00ff99",
              }),
            }}
          />

          {/* Price range */}
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            placeholder="Min Entry"
            className="bg-[#0b0b0b] border border-[#333] text-[#e0e0e0] placeholder-gray-600 p-2 rounded-sm text-xs w-24"
          />
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            placeholder="Max Entry"
            className="bg-[#0b0b0b] border border-[#333] text-[#e0e0e0] placeholder-gray-600 p-2 rounded-sm text-xs w-24"
          />

          {/* Buttons */}
          <button
            onClick={() => setPage(0)}
            className="px-3 py-1 rounded-sm bg-[#00ff99] text-[#0d0d0d] font-bold uppercase text-xs hover:bg-[#00cc77]"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="px-3 py-1 rounded-sm border border-[#333] text-gray-400 hover:bg-[#1a1a1a] text-xs"
          >
            Reset
          </button>
        </div>

        {/* ---------- TABLE ---------- */}
        <div className="bg-[#111]/80 border border-[#222] rounded-md overflow-x-auto">
          <div className="flex justify-between items-center px-6 py-4 border-b border-[#222]">
            <div className="text-[#00ff99] font-semibold text-sm uppercase tracking-widest">
              {"Historical_Signals"}
            </div>
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-sm bg-[#00ff99] text-[#0d0d0d] text-xs font-bold hover:bg-[#00cc77]"
            >
              Export CSV
            </button>
          </div>

          <table className="w-full text-xs text-left text-[#ccc]">
            <thead className="bg-[#0f0f0f] text-[#00ff99] border-b border-[#222] uppercase tracking-wider">
              <tr>
                {["script", "side", "status", "entry", "exit", "date"].map((col) => (
                  <th
                    key={col}
                    onClick={() => {
                      setSortField(col);
                      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    }}
                    className="px-4 py-3 cursor-pointer select-none"
                  >
                    {col} {sortField === col ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((sig) => (
                <tr
                  key={sig.id}
                  className="border-b border-[#222] hover:bg-[#191919] transition-all"
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
              pageClassName="px-3 py-1 border border-[#333] rounded-sm hover:bg-[#1a1a1a]"
              activeClassName="bg-[#00ff99] text-[#0d0d0d] border-none"
              previousLabel="<"
              nextLabel=">"
              previousClassName="px-3 py-1 border border-[#333] rounded-sm hover:bg-[#1a1a1a]"
              nextClassName="px-3 py-1 border border-[#333] rounded-sm hover:bg-[#1a1a1a]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
