import { ImSearch } from "react-icons/im";
import "../../App.css"; // We'll add some CSS

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  return (
    <section>
      <div className="container text-center">
        <div className="row">
          <div className="col position-relative">

            {/* Icon */}
            <ImSearch className="search-icon" />

            {/* Input */}
            <input
              className="p-2 ps-5 border border-primary rounded w-100"
              type="text"
              placeholder="Search..."
              value={search}
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="col">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded w-50 text-start"
            >
              <option value="">All</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
