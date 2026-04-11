import { useState } from "react";
import SearchInput from "../ui/SearchInput";
import SelectDropdown from "../ui/SelectDropdown";
import Button from "../ui/Button";

const SearchFilterBar = ({ data, onResults, cityOptions, sortOptions }) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    let results = [...data];

    if (query.trim()) {
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (city) results = results.filter((item) => item.city === city);

    if (sort === "Newest") results.sort((a, b) => b.id - a.id);
    else if (sort === "Oldest") results.sort((a, b) => a.id - b.id);

    onResults(results);
  };

  return (
    <div className="pt-1 md:pt-15 rounded-t-[50%] flex flex-col items-center gap-6 px-6 pb-10">
      <SearchInput
        placeholder="Search by title, description and city..."
        bgColor="bg-[#111111]"
        borderColor="border-gray-500"
        rounded={true}
        iconPosition="left"
        width="w-full sm:max-w-4xl mx-auto"
      />

      <div className="flex flex-wrap gap-10 w-full max-w-4xl justify-between sm:justify-center pt-3 md:pt-1">
        <SelectDropdown
          value={city}
          onChange={(val) => setCity(val)}
          defaultLabel="All City"
          options={cityOptions}
        />

        <SelectDropdown
          value={sort}
          onChange={(val) => setSort(val)}
          defaultLabel="Sort By"
          options={sortOptions}
        />

        <Button
          text="Search Video"
          width="w-full sm:w-[60%] md:w-[40%] lg:w-[30%]"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchFilterBar;
