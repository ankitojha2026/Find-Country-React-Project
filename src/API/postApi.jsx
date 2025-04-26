import axios from "axios";

const api = axios.create({

    baseURL: "https://restcountries.com/v3.1/",
});

// here i'm creating a function to get all countries data from the api
// and i'm using axios to make the api call
export const getAllCountries = () => {
    return api.get("all?fields=name,flags,population,region,subregion,capital,languages,currencies,borders");}

// here i'm creating a function to get country data by name from the api
// and i'm using axios to make the api call
// and i'm using the name parameter to get the country data by name
// and i'm using the fullText parameter to get the country data by name
export const getCountryByName = (name) => {
    return api.get(`name/${name}?fullText=true&fields=name,flags,population,region,subregion,capital,languages,currencies,borders`);
}