
import 'bootstrap/dist/css/bootstrap.min.css';
import countryData from "../API/countryData.JSON";
import { HiArrowSmRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about-section">
   
   <div><center ><h1 style={{fontFamily:"monospace" , fontSize:"50px"} } className="mb-3">Here are the Interesting Facts <br /> We're proud of ........</h1></center></div>
    <div className="d-flex flex-wrap justify-content-center gap-3 px-3">
        {countryData.map((country) => (
            <div className="card bg-white shadow-lg rounded border-0" style={{ width: "18rem" }} key={country.id}>
                <div className="card-body p-3">
                    <h5 className="card-title">{country.countryName}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary color">Capital: {country.capital}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Population: {country.population}</h6>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Area: {country.area}</h6>
                    <p className="card-text">About: {country.historicalFacts}</p>
                    <button className="btn mt-3 p-1 btn-primary btn-lg ">See More <HiArrowSmRight /></button>
                </div>
            </div>
        ))}
    </div>
</section>

    );
};

export default About;
