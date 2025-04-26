import { useEffect, useState, useTransition } from "react";
import { getAllCountries } from "../API/postApi";
import { NavLink } from "react-router-dom";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [datas, setData] = useState([]);

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

  if (isPending || datas.length === 0) return <h1>Loading...</h1>;
  console.log(datas);

  return (
    <>
    <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
     {datas.map((country, index) => (
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
