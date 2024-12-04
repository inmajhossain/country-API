// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "https://restcountries.com/v3.1/all?fields=name,flags";

// const CountrySearch = () => {
//   const [query, setQuery] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [displayedCountries, setDisplayedCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showMore, setShowMore] = useState(9); // Number of countries to show initially

//   const fetchCountries = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(API_URL);
//       setCountries(response.data);
//       setDisplayedCountries(response.data.slice(0, showMore)); // Show only the first 9 countries
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCountries();
//   }, []);

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     setDisplayedCountries(
//       countries
//         .filter((country) =>
//           country.name.common
//             .toLowerCase()
//             .includes(e.target.value.toLowerCase())
//         )
//         .slice(0, showMore) // Limit to the number of countries to show
//     );
//   };

//   const handleCountryClick = (country) => {
//     setSelectedCountry(country);
//   };

//   const handleShowMore = () => {
//     setShowMore((prev) => prev + 9); // Show 9 more countries
//     setDisplayedCountries(countries.slice(0, showMore + 9)); // Update displayed countries
//   };

//   const handleCloseModal = () => {
//     setSelectedCountry(null);
//   };

//   return (
//     <div className="container mx-auto p-4 flex flex-col items-center">
//       <h1 className="text-3xl font-bold text-center mt-[50px] mb-[30px]">
//         COUNTRY SEARCH
//       </h1>
//       <input
//         type="text"
//         placeholder="Search for a country..."
//         value={query}
//         onChange={handleSearch}
//         className=" border border-gray-300 p-2 rounded w-[350px] text-center mb-4 bg-amber-100 text-xl"
//       />
//       {loading && <p className="text-center">Loading countries...</p>}
//       {!loading && displayedCountries.length === 0 && (
//         <p className="text-center">No countries found.</p>
//       )}
//       <div className="lg:w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 gap-y-[50px] mt-[50px]">
//         {displayedCountries.map((country) => (
//           <div
//             key={country.name.common}
//             className="border rounded-lg overflow-hidden shadow-lg cursor-pointer flex flex-col items-center lg:w-[300px]"
//             onClick={() => handleCountryClick(country)}
//           >
//             <img
//               src={country.flags.png}
//               alt={country.name.common}
//               className="w-[250px] h-[200px] object-contain p-2 "
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{country.name.common}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//       {displayedCountries.length < countries.length && (
//         <button
//           onClick={handleShowMore}
//           className="mt-[50px] mb-[50px] bg-blue-500 text-white py-2 px-8 rounded"
//         >
//           Show More
//         </button>
//       )}
//       {selectedCountry && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-amber-200 rounded-lg shadow-lg relative w-[390px] lg:w-[800px] flex flex-col items-center justify-center gap-[15px] p-[30px]">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-4 right-8 w-[40px] h-[40px] text-white bg-black p-1 rounded-full "
//             >
//               X
//             </button>
//             <h2 className="text-5xl font-bold mb-[15px]">
//               {selectedCountry.name.common}
//             </h2>
//             <img
//               src={selectedCountry.flags.png}
//               alt={selectedCountry.name.common}
//               className="w-32 h- 32 object-contain object-top border-white border-[5px] "
//             />
//             <p className="mt-2 text-2xl">
//               Official Name: {selectedCountry.name.official}
//             </p>

//             <p className="mt-2 text-center text-xl">
//               Information: {selectedCountry.flags.alt.slice(0, 250)}....
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CountrySearch;
// new new new
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,currencies,capital,maps,population,timezones,continents,languages";

const CountrySearch = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(9); // Number of countries to show initially

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setCountries(response.data);
      setDisplayedCountries(response.data.slice(0, showMore)); // Show only the first 9 countries
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setDisplayedCountries(
      countries
        .filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
        .slice(0, showMore) // Limit to the number of countries to show
    );
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleShowMore = () => {
    setShowMore((prev) => prev + 9); // Show 9 more countries
    setDisplayedCountries(countries.slice(0, showMore + 9)); // Update displayed countries
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mt-[50px] mb-[30px]">
        COUNTRY SEARCH
      </h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded w-[350px] text-center mb-4 bg-amber-100 text-xl"
      />
      {loading && <p className="text-center">Loading countries...</p>}
      {!loading && displayedCountries.length === 0 && (
        <p className="text-center">No countries found.</p>
      )}
      <div className="lg:w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 gap-y-[50px] mt-[50px]">
        {displayedCountries.map((country) => (
          <div
            key={country.name.common}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer flex flex-col items-center lg:w-[300px]"
            onClick={() => handleCountryClick(country)}
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-[250px] h-[200px]object-contain p-2 "
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{country.name.common}</h2>
            </div>
          </div>
        ))}
      </div>
      {displayedCountries.length < countries.length && (
        <button
          onClick={handleShowMore}
          className="mt-[50px] mb-[50px] bg-blue-500 text-white py-2 px-8 rounded"
        >
          Show More
        </button>
      )}
      {selectedCountry && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black text-white rounded-lg shadow-lg relative w-[390px] lg:w-[800px] flex flex-col items-center justify-center gap-[15px] p-[30px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-8 w-[40px] h-[40px] text-white bg-black border-white border-[2px] p-1 rounded-full"
            >
              X
            </button>
            <h2 className="text-5xl font-bold mb-[15px]">
              {selectedCountry.name.common}
            </h2>
            <img
              src={selectedCountry.flags.png}
              alt={selectedCountry.name.common}
              className="w-[200px] h-full object-contain object-top border-white border-[5px]"
            />
            <p className="mt-2 text-2xl">
              Official Name: {selectedCountry.name.official}
            </p>
            {selectedCountry.currencies && (
              <p className="mt-2 text-3xl">
                Currency:{" "}
                {Object.values(selectedCountry.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
            )}
            {selectedCountry.capital && (
              <p className="mt-2 text-3xl font-semibold">
                Capital :{" "}
                {Object.values(selectedCountry.capital)
                  .map((capitalInfo) => capitalInfo)
                  .join(", ")}
              </p>
            )}

            {selectedCountry.maps && selectedCountry.maps.googleMaps && (
              <a
                href={selectedCountry.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[15px] font-semibold text-center text-white underline"
              >
                MAP: {selectedCountry.maps.googleMaps}
              </a>
            )}

            <p className="mt-2  font-semibold">
              Population: {selectedCountry.population}
            </p>
            <p className="mt-2 font-semibold">
              Timezones: {selectedCountry.timezones}
            </p>
            <p className="mt-2 font-semibold">
              Continents: {selectedCountry.continents}
            </p>
            <p className="mt-2  font-semibold">
              Languages:{" "}
              {selectedCountry.languages
                ? Object.values(selectedCountry.languages).join(", ")
                : "N/A"}
            </p>

            <p className="mt-2 text-center">
              Information: {selectedCountry.flags.alt.slice(0, 250)}....
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
