/* eslint-disable react-hooks/exhaustive-deps */
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";

interface DebouncedSearchProps {
  onSearch: (query: string) => void;
  placeholder: string;
}

const DebouncedSearch: React.FC<DebouncedSearchProps> = ({
  onSearch,
  placeholder = "Search",
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    [onSearch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DebouncedSearch;
