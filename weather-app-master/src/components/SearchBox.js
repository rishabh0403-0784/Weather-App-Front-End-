import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import debounce from "lodash.debounce";

import { autoCompleteService } from "../services";

export default function SearchBox({ placeholder }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const debouncedChangeHandler = useMemo(
    () =>
      debounce(async (query) => {
        if (query !== "") {
          const results = await autoCompleteService(query);
          setResults(results);
        } else {
          setResults([]);
        }
      }, 500),
    []
  );

  const onChange = async (e) => {
    const { value } = e.target;
    setQuery(value);
    debouncedChangeHandler(value);
    setShowResults(true);
  };

  const handleClick = ({ name, country, coord }) => {
    const params = {
      name,
      country,
      coord,
    };
    navigate(`/location/${window.btoa(JSON.stringify(params))}`);
    setQuery(name);
    setShowResults(false);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ""}
      />

      {showResults && query.length >= 3 && (
        <ul>
          {results.length > 0 ? (
            results.map((city, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => handleClick(city)}
                    style={{ cursor: "pointer" }}
                  >
                    {city.name}
                    {city.state ? `, ${city.state}` : ""}{" "}
                    <span>({city.country})</span>
                  </button>
                </li>
              );
            })
          ) : (
            <li className="search__no-results">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
