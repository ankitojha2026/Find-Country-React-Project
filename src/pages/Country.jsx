import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "../API/postApi";
import { NavLink } from "react-router-dom";
import SearchFilter from "../components/Layout/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [datas, setData] = useState([]);


  const [search , setSearch]= useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    startTransition(() => {
      (async () => {
        try {
          const res = await getAllCountries();
          setData(res.data); // ✅ Correct: save only country list
        } catch (error) {
          console.log(error);
        }
      })();
    });
  }, []);

  console.log(datas);

  if (isPending || datas.length === 0) return <h1>Loading...</h1>;
  console.log(datas);

// here we are filtering the data based on the search and filter value
// search is used to filter the country name and filter is used to filter the region

  const filteredData = datas.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const searchTerm = search.toLowerCase();
    const region = filter.toLowerCase();

    return (
      (countryName.includes(searchTerm) || searchTerm === "") &&
      (country.region.toLowerCase().includes(region) || region === "")
    );
  }); 
  return (
    <>

  
        <SearchFilter    
        
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        />
    <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
     {filteredData.map((country, index) => (
        <div className="card" style={{ width: "18rem", margin: "10px" }} key={index}>
          <img src={country.flags.png} className="card-img-top p-2" alt="flag" />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">Capital: {country.capital?.[0]}</p>
            <p className="card-text">Capital: {country.population}</p>
            <p className="card-text">Capital: {country.region}</p>
            <NavLink to={`/country/${country.name.common}`}><h1 className="btn btn-primary"> Know More</h1></NavLink>
          </div>
        </div>
      ))}


     </div>
    </>
  );
};

export default Country;
