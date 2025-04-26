import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryByName } from "../../API/postApi";
import { HiChevronLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const CountryInd = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [datas, setData] = useState(null); // Set to null initially

  useEffect(() => {
    startTransition(() => {
      (async () => {
        try {
          const res = await getCountryByName(params.id);
          setData(res.data);
        } catch (error) {
          console.error(error);
        }
      })();
    });
  }, [params.id]);

  // Log the data to see the structure

  if (isPending || !datas) return <span className="loader"></span>
  else  console.log(datas[0].flags.png); // Safe loading

  return  <>
  

  <NavLink to="/country"><span className="btn btn-outline-secondary ms-5"> <HiChevronLeft />Previous </span></NavLink>

  <div className="container text-center mt-5 mb-5 m-auto">
  <div className="row">
    <div className="col mt-50">
      
     <div className="card" style={{width:"20rem"}}>   <img src={datas[0].flags.svg}  alt="flag" /></div>

    </div>
    <div className="col">
        <div className="text-start mt-4 fs-5 font-weight-bold fst-italic">
            <h1 className="text-center">Country Details</h1>
            <h5 className="">{datas[0].name.common}</h5>
            <p className="">Capital: {datas[0].capital?.[0]}</p>
            <p className="">Population: {datas[0].population}</p>
            <p className="">Region: {datas[0].region}</p>
            <p className="">Subregion: {datas[0].subregion}</p>
            <p className="">Languages: {Object.values(datas[0].languages).join(", ")}</p>
            <p className="">Currencies: {Object.values(datas[0].currencies).map((currency) => currency.name).join(", ")}</p>
        </div>
    </div>
  </div>
</div>
  
  
  
  </>















    // <div classNameName="d-flex flex-wrap justify-content-center gap-3 px-3">
    //   <div classNameName="card" style={{ width: "18rem", margin: "10px" }} key={datas.name.common}>
    //     <img src={datas.flags.png} classNameName="card-img-top p-2" alt="flag" />
    //     <div classNameName="card-body">
    //       <h5 classNameName="card-title">{datas.name.common}</h5>
    //       <p classNameName="card-text">Capital: {datas.capital?.[0]}</p>
    //       <p classNameName="card-text">Population: {datas.population}</p>
    //       <p classNameName="card-text">Region: {datas.region}</p>
    //       <NavLink to={`/country/${datas.name.common}`}>
    //         <h1 classNameName="btn btn-primary">Know More</h1>
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>
   
  
};

export default CountryInd;
