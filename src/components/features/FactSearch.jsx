import { useState } from "react";
import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";
import Button from "../ui/Button";
import searchBgImg from "../../assets/images/FactBg.png";
import { IoMdArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const FactSearch = ({
  data = [],
  onResults,
  cityOptions = [],
  sortOptions = [],
}) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    let results = [...data];

    if (query.trim()) {
      results = results.filter(
        (item) =>
          item.title?.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle?.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (city) results = results.filter((item) => item.city === city);

    if (sort === "Newest") results.sort((a, b) => b.id - a.id);
    else if (sort === "Oldest") results.sort((a, b) => a.id - b.id);

    onResults?.(results);
  };

  return (
    <div className="w-full pt-1 md:pt-15 flex flex-col items-center gap-6 px-3 sm:px-6 pb-10">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* BACKGROUND IMAGE - Changed h-auto to h-full for the container to match */}
        <img
          src={searchBgImg}
          alt="search-bg"
          className="w-full h-full min-h-[450px] sm:min-h-[450px] md:min-h-0 object-cover rounded-3xl"
        />

        {/* OVERLAY CONTENT - Added overflow-hidden and adjusted padding */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 sm:px-8 w-full h-full">
          <div className="w-full max-w-5xl">
            {/* SEARCH INPUT */}
            <div className="w-full mb-2 sm:mb-4">
              <SearchInput
                value={query}
                onChange={(val) => setQuery(val)}
                placeholder="Search by title, description and city..."
                bgColor="white" // Changed to white for better visibility on mobile
                borderColor="border-black"
                rounded={true}
                iconPosition="left"
                width="w-full"
                textColor="text-black"
              />
            </div>

            {/* FILTER GRID - Maintained your grid but optimized gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 items-end">
              {/* CATEGORY */}
              <div className="flex flex-col">
                <label className="text-[11px] sm:text-sm font-semibold text-black mb-1">
                  Category
                </label>
                <SelectDropdown
                  value={city}
                  onChange={(val) => setCity(val)}
                  defaultLabel="Select"
                  options={[
                    { label: "Mumbai", value: "Mumbai" },
                    { label: "Delhi", value: "Delhi" },
                  ]}
                  bgColor="white"
                  borderColor="border-black"
                  extraClasses="w-full"
                  rounded={true}
                  height="h-10 sm:h-11"
                  width="w-[80%]"
                  textColor="text-black"
                  arrowIcon={<IoMdArrowDown className="w-5 h-5" />}
                />
              </div>

              {/* TAGS */}
              <div className="flex flex-col">
                <label className="text-[11px] sm:text-sm font-semibold text-black mb-1">
                  Tags
                </label>
                <SelectDropdown
                  value={sort}
                  onChange={(val) => setSort(val)}
                  defaultLabel="Select"
                  options={[
                    { label: "Newest", value: "Newest" },
                    { label: "Oldest", value: "Oldest" },
                  ]}
                  bgColor="white"
                  borderColor="border-black"
                  rounded={true}
                  height="h-10 sm:h-11"
                  width="w-[80%]"
                  textColor="text-black"
                  arrowIcon={<IoMdArrowDown className="w-5 h-5" />}
                />
              </div>

              {/* BUTTON */}
              <div className="w-full">
                <Button
                  text="Apply For Filter"
                  width
                  height="h-10 sm:h-11"
                  radius="rounded-tl-xl rounded-br-xl"
                  textColor="text-black"
                  onClick={handleSearch}
                />
              </div>
            </div>

            {/* BADGES LIST - Added flex-wrap and hidden-scroll for very small screens */}
            <div className="mt-6 w-full overflow-x-hidden">
              <ul className="space-y-4 sm:space-y-5 text-gray-700 text-sm">
                {/* CATEGORY TAGS */}
                <li className="flex items-start gap-2">
                  <FaStar className="text-black text-sm sm:text-lg shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    <p className="font-semibold text-black text-[11px] sm:text-sm whitespace-nowrap">
                      Category:
                    </p>
                    {["Solar Energy", "Solar Energy", "Solar Energy"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="bg-yellow-300 text-black text-[9px] sm:text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </li>

                {/* TAGS LIST */}
                <li className="flex items-start gap-2">
                  <FaStar className="text-black text-sm sm:text-lg shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    <p className="font-semibold text-black text-[11px] sm:text-sm whitespace-nowrap">
                      Tags:
                    </p>
                    {[
                      "Solar Energy",
                      "Solar Energy",
                      "Solar Energy",
                      "Solar Energy",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-yellow-300 text-black text-[9px] sm:text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            {/* RESULT COUNT */}
            <p className="text-blue-800 font-semibold text-[11px] sm:text-sm md:text-base mt-4 sm:mt-6">
              Showing {data.length} Of {data.length} Myth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactSearch;
