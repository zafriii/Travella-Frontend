// import React, { useState , useEffect} from 'react';
// import Data from './Data';
// import './plan.css';
// import { GoSearch } from "react-icons/go";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from 'react-share';

// function Suggest() {
//   const [budget, setBudget] = useState();
//   const [searchResults, setSearchResults] = useState([{
//     id: 1,
//     budget: 500,
//     country: "India",
//     place: ["Mumbai", "Delhi", "Agra", "Goa, Jaipur", "Bangalore", "Rajasthan", "Gujrat"],
//     Hotel: { name: "Taj Mahal", costPerNight: 250 },
//     stays: "3 nights 2 days",
//     Flights: "Indira Gandhi International Airport"
//   }]);
//   const [weatherData, setWeatherData] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [isWeatherVisible, setIsWeatherVisible] = useState(false);

//   const fetchWeatherData = async (city) => {
//     const apiKey = "26809974dffde6716c02bd9e92bee0ad";
//     const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//     try {
//       const response = await fetch(apiURL + city + `&appid=${apiKey}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//       return null;
//     }
//   };

//   const handleSearch = () => {
//     const filteredResults = Data.filter(item => item.budget <= budget);
//     setSearchResults(filteredResults);
//   };

//   const handleCountryWeather = async (country) => {
//     if (selectedCountry && selectedCountry === country) {
//       setIsWeatherVisible(false);
//       setSelectedCountry(null);
//       setWeatherData([]);
//     } else {
//       const places = country.place;
//       const weatherData = await Promise.all(places.map(place => fetchWeatherData(place)));
//       setWeatherData(weatherData.filter(data => data !== null));
//       setSelectedCountry(country);
//       setIsWeatherVisible(true);
//     }
//   };


//   const handleRatingChange = (country, rating) => {
//     const updatedResults = searchResults.map(item => {
//       if (item === country) {
//         return { ...item, rating: rating };
//       }
//       return item;
//     });
//     setSearchResults(updatedResults);
//   };


//   const renderStars = (country) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           onClick={() => handleRatingChange(country, i)}
//           style={{ color: country.rating >= i ? "gold" : "grey", cursor: "pointer" }}
//         >
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };





//   const [minBudget, setMinBudget] = useState(500); // Initial minimum budget
//   const [maxBudget, setMaxBudget] = useState(1300); // Initial maximum budget


//   // Function to handle changes in the budget range
//   const handleBudgetChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'minBudget') {
//       setMinBudget(value);
//     } else if (name === 'maxBudget') {
//       setMaxBudget(value);
//     }
//     updateSearchResults(value);
//   };

//   // Function to update the list of search results based on the selected budget range
//   const updateSearchResults = (value) => {
//     const filteredResults = Data.filter(item => item.budget >= minBudget && item.budget <= maxBudget);
//     setSearchResults(filteredResults);
//   };




//   return (
//     <>
//       <div className="plans">
//         <div className="plan-headings">
//           <h2>Travel Plans</h2>
//           <h3>We suggest destinations according to your budget.</h3>
//           <h3>Starting from $500!</h3>
//         </div>
//         <div className="search">
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             placeholder="Enter your budget"
//           />
//           <button onClick={handleSearch}><GoSearch /></button>      
//         </div>


//         <div className="range">
//         <label>Maximum Budget: </label>
//         <input
//         type="range"
//         min="500"
//         max="1300"
//         value={maxBudget}
//         name="maxBudget"
//         onChange={handleBudgetChange}
//        />
//         <span>{maxBudget}</span>

//         </div>

//         <br></br>
//         <hr></hr>
//         <hr></hr>
//         <div className='plan-container'>
//           {searchResults
//             .sort((a, b) => a.country.localeCompare(b.country))
//             .map(item => (
//               <div key={item.id}>
//                 <h3>{item.country}</h3>
//                 <p className='places'>Places: {item.place.join(', ')}</p>
//                 <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
//                 <p>Stays: {item.stays}</p>
//                 <p>Flights: {item.Flights}</p>

//                 <div className='rating'>
//                   Rating: {renderStars(item)}
//                 </div>
                
//                 <button className='weather-btn' onClick={() => handleCountryWeather(item)}>Show Weather</button>
//                 <div className="social-share">
//                   <FacebookShareButton url={window.location.href} quote={`Check out this amazing destination: ${item.country}`} >
//                     Share on Facebook
//                   </FacebookShareButton>
//                   <TwitterShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
//                     Share on Twitter
//                   </TwitterShareButton>
//                   <WhatsappShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
//                     Share on Whatsapp
//                   </WhatsappShareButton>
//                 </div>

//                 <hr></hr>
//                 <hr></hr>
//                 {selectedCountry === item && isWeatherVisible && weatherData.map((weather, index) => (
//                   <div key={index}>
//                     <h3>{weather.name}</h3>
//                     {weather.main && (
//                       <>
//                         <p>Current Temperature: {weather.main.temp}°C</p>
//                         <p>Feels Like: {weather.main.feels_like}°C</p>
//                         <p>Humidity: {weather.main.humidity}%</p>
//                       </>
//                     )}
//                     {weather.weather && weather.weather.length > 0 && (
//                       <p>Description: {weather.weather[0].description}</p>
//                     )}
//                   </div>
//                 ))}
                
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Suggest;







// import React, { useState, useEffect } from 'react';
// import Data from './Data';
// import './plan.css';
// import { GoSearch } from "react-icons/go";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from 'react-share';

// function Suggest() {
//   const [budget, setBudget] = useState();
//   const [searchResults, setSearchResults] = useState([]);
//   const [weatherData, setWeatherData] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [isWeatherVisible, setIsWeatherVisible] = useState(false);
//   const [minBudget, setMinBudget] = useState(500); // Initial minimum budget
//   const [maxBudget, setMaxBudget] = useState(1300); // Initial maximum budget
//   const [selectedRegion, setSelectedRegion] = useState(null);

//   useEffect(() => {
//     // Load initial search results on component mount
//     updateSearchResults();
//   }, [selectedRegion, minBudget, maxBudget]); // Trigger updateSearchResults when selectedRegion or budget changes

//   // Function to update the list of search results based on the selected budget range and region
//   const updateSearchResults = () => {
//     let filteredResults = Data.filter(item => item.budget >= minBudget && item.budget <= maxBudget);
//     if (selectedRegion) {
//       filteredResults = filteredResults.filter(item => item.region === selectedRegion);
//     }
//     setSearchResults(filteredResults);
//   };

//   const handleRegionFilter = (region) => {
//     setSelectedRegion(region);
//   };

//   const fetchWeatherData = async (city) => {
//     const apiKey = "26809974dffde6716c02bd9e92bee0ad";
//     const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//     try {
//       const response = await fetch(apiURL + city + `&appid=${apiKey}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//       return null;
//     }
//   };

//   const handleSearch = () => {
//     const filteredResults = Data.filter(item => item.budget <= budget);
//     setSearchResults(filteredResults);
//   };

//   const handleCountryWeather = async (country) => {
//     if (selectedCountry && selectedCountry === country) {
//       setIsWeatherVisible(false);
//       setSelectedCountry(null);
//       setWeatherData([]);
//     } else {
//       const places = country.place;
//       const weatherData = await Promise.all(places.map(place => fetchWeatherData(place)));
//       setWeatherData(weatherData.filter(data => data !== null));
//       setSelectedCountry(country);
//       setIsWeatherVisible(true);
//     }
//   };

//   const handleRatingChange = (country, rating) => {
//     const updatedResults = searchResults.map(item => {
//       if (item === country) {
//         return { ...item, rating: rating };
//       }
//       return item;
//     });
//     setSearchResults(updatedResults);
//   };

//   const renderStars = (country) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           onClick={() => handleRatingChange(country, i)}
//           style={{ color: country.rating >= i ? "gold" : "grey", cursor: "pointer" }}
//         >
//           &#9733;
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <>
//       <div className="plans">
//         <div className="plan-headings">
//           <h2>Travel Plans</h2>
//           <h3>We suggest destinations according to your budget.</h3>
//           <h3>Starting from $500!</h3>
//         </div>
//         <div className="search">
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             placeholder="Enter your budget"
//           />
//           <button onClick={handleSearch}><GoSearch /></button>
//         </div>

//         <div className="range">
//           <label>Maximum Budget: </label>
//           <input
//             type="range"
//             min="500"
//             max="1300"
//             value={maxBudget}
//             name="maxBudget"
//             onChange={(e) => setMaxBudget(e.target.value)}
//           />
//           <span>{maxBudget}</span>
//         </div>

//         <div className="region-filters">
//           <button onClick={() => handleRegionFilter("Asia")}>Asia</button>
//           <button onClick={() => handleRegionFilter("Europe")}>Europe</button>
//           <button onClick={() => handleRegionFilter("Middle East")}>Middle East</button>
//           <button onClick={() => handleRegionFilter("Africa")}>Africa</button>
//         </div>

//         <br></br>
//         <hr></hr>
//         <hr></hr>
//         <div className='plan-container'>
//           {searchResults.length > 0 ? (
//             searchResults
//               .sort((a, b) => a.country.localeCompare(b.country))
//               .map(item => (
//                 <div key={item.id}>
//                   <h3>{item.country}</h3>
//                   <p className='places'>Places: {item.place.join(', ')}</p>
//                   <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
//                   <p>Stays: {item.stays}</p>
//                   <p>Flights: {item.Flights}</p>

//                   <div className='rating'>
//                     Rating: {renderStars(item)}
//                   </div>

//                   <button className='weather-btn' onClick={() => handleCountryWeather(item)}>Show Weather</button>
//                   <div className="social-share">
//                     <FacebookShareButton url={window.location.href} quote={`Check out this amazing destination: ${item.country}`} >
//                       Share on Facebook
//                     </FacebookShareButton>
//                     <TwitterShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
//                       Share on Twitter
//                     </TwitterShareButton>
//                     <WhatsappShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
//                       Share on Whatsapp
//                     </WhatsappShareButton>
//                   </div>

//                   <hr></hr>
//                   <hr></hr>
//                   {selectedCountry === item && isWeatherVisible && weatherData.map((weather, index) => (
//                     <div key={index}>
//                       <h3>{weather.name}</h3>
//                       {weather.main && (
//                         <>
//                           <p>Current Temperature: {weather.main.temp}°C</p>
//                           <p>Feels Like: {weather.main.feels_like}°C</p>
//                           <p>Humidity: {weather.main.humidity}%</p>
//                         </>
//                       )}
//                       {weather.weather && weather.weather.length > 0 && (
//                         <p>Description: {weather.weather[0].description}</p>
//                       )}
//                     </div>
//                   ))}

//                 </div>
//               ))
//           ) : (
//             <p>No destinations found.</p>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Suggest;







import React, { useState, useEffect } from 'react';
import Data from './Data';
import './plan.css';
import { GoSearch } from "react-icons/go";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { IoIosAddCircle } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useList } from '../store/ListContext';


function Suggest() {
  const [budget, setBudget] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    
    updateSearchResults();
  }, [selectedRegion, budget]); 

  
  const updateSearchResults = () => {
    let filteredResults = Data.filter(item => item.budget <= budget);
    if (selectedRegion) {
      filteredResults = filteredResults.filter(item => item.region === selectedRegion || item.region === "Middle-east");
    }
    setSearchResults(filteredResults);
  };

  const handleRegionFilter = (region) => {
    // setSelectedRegion(region);
    setSelectedRegion(region === "All" ? null : region);
  };

  const fetchWeatherData = async (city) => {

    const apiKey = "26809974dffde6716c02bd9e92bee0ad";

    //const apiKey = process.env.API_KEY;
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    try {
      const response = await fetch(apiURL + city + `&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };

  const handleSearch = () => {
    updateSearchResults();
  };

  const handleCountryWeather = async (country) => {
    if (selectedCountry && selectedCountry === country) {
      setIsWeatherVisible(false);
      setSelectedCountry(null);
      setWeatherData([]);
    } else {
      const places = country.place;
      const weatherData = await Promise.all(places.map(place => fetchWeatherData(place)));
      setWeatherData(weatherData.filter(data => data !== null));
      setSelectedCountry(country);
      setIsWeatherVisible(true);
    }
  };

  const handleRatingChange = (country, rating) => {
    const updatedResults = searchResults.map(item => {
      if (item === country) {
        return { ...item, rating: rating };
      }
      return item;
    });
    setSearchResults(updatedResults);
  };

  const renderStars = (country) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRatingChange(country, i)}
          style={{ color: country.rating >= i ? "gold" : "grey", cursor: "pointer" }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  const { dispatch } = useList();

  const handleAddToList = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    
  };

  // const handleAddToList = (item) => {
  //   const alreadyInList = state.list.some(listItem => listItem.id === item.id);
  //   if (alreadyInList) {
  //     alert('This item is already in your list!');
  //   } else {
  //     dispatch({ type: 'ADD_ITEM', payload: item });
  //   }
  // };

  return (
    <>
      <div className="plans">
       
        <div className="plan-headings">
          <div className="plan-image-container">
            <img src='https://images.unsplash.com/photo-1623941000186-afafbcfb65e7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Travel Plans"></img>
            <div className="plan-text">
              {/* <h2>Travel Plans</h2> */}
              <h3>We suggest destinations according to your budget.</h3>
              <h3>Starting from $500!</h3>
            </div>
            <div className="search-region-container">
              <div className="search">
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter your budget"
                />
                <button onClick={handleSearch}><GoSearch /></button>
              </div>
              <div className="region-filters">
                <button onClick={() => handleRegionFilter("All")}>All</button>
                <button onClick={() => handleRegionFilter("Asia")}>Asia</button>
                <button onClick={() => handleRegionFilter("Europe")}>Europe</button>
                <button onClick={() => handleRegionFilter("Middle East")}>Middle East</button>
                <button onClick={() => handleRegionFilter("Africa")}>Africa</button>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <hr></hr>
        
        <div className='plan-container'>
          {searchResults.length > 0 ? (
            searchResults
              .sort((a, b) => a.country.localeCompare(b.country))
              .map(item => (
                <div key={item.id}>

                  <button className='addtolist' onClick={() => handleAddToList(item)}>Add to List <IoIosAddCircle /> </button>
             

                  <h3>{item.country}</h3>
                  <p className='places'>Places: {item.place.join(', ')}</p>
                  <p>Hotel: {item.Hotel.name} - $ {item.Hotel.costPerNight}</p>
                  <p>Stays: {item.stays}</p>
                  <p>Flights: {item.Flights}</p>

                  <div className='rating'>
                    Rating: {renderStars(item)}
                  </div>

                  <button className='weather-btn' onClick={() => handleCountryWeather(item)}>Show Weather <TiWeatherPartlySunny className='weather-icon'/> </button>
                  <div className="social-share">
                    <FacebookShareButton url={window.location.href} quote={`Check out this amazing destination: ${item.country}`} >
                      Share on Facebook
                    </FacebookShareButton>
                    <TwitterShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
                      Share on Twitter
                    </TwitterShareButton>
                    <WhatsappShareButton url={window.location.href} title={`Check out this amazing destination: ${item.country}`} className='share'>
                      Share on Whatsapp
                    </WhatsappShareButton>
                  </div>

                  <hr></hr>
                  <hr></hr>
                  {selectedCountry === item && isWeatherVisible && weatherData.map((weather, index) => (
                    <div key={index}>
                      <h3>{weather.name}</h3>
                      {weather.main && (
                        <>
                          <p>Current Temperature: {weather.main.temp}°C</p>
                          <p>Feels Like: {weather.main.feels_like}°C</p>
                          <p>Humidity: {weather.main.humidity}%</p>
                        </>
                      )}
                      {weather.weather && weather.weather.length > 0 && (
                        <p>Description: {weather.weather[0].description}</p>
                      )}
                    </div>
                  ))}

                </div>
              ))
          ) : (
            <p>No destinations found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Suggest;
