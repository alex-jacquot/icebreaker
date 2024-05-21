import { useState } from "react";

const useFilterManager = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filterName) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== filterName)
      );
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  return { selectedFilters, toggleFilter };
};

export default useFilterManager;
