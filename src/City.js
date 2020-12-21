import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";
const City = () => {
  const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";
  const [currentPage, setCurrentPage] = useState(1);
  const [weatherData, setWeatherData] = useState([]);

  const postPerPage = 5;
  const cities = [
    { name: "London", id: 2643743 },
    { name: "Ayn Ḩalāqīm", id: 2960 },
    { name: "Taglag", id: 3245 },
    { name: "Qabāghlū", id: 3530 },
    { name: "Arīqah", id: 5174 },
    { name: "Kalāteh-ye Dowlat", id: 7264 },
    { name: "Behjatābād", id: 8084 },
    { name: "Ţālesh Maḩalleh", id: 9874 },
    { name: "Shahrīār Kandeh", id: 11263 },
    { name: "Bālā Aḩmad Kolā", id: 11754 },
    { name: "Aş Şūrah aş Şaghīrah", id: 12795 },
    { name: "Āqdūz", id: 14177 },
    { name: "Āzādshahr", id: 14256 },
    { name: "Gollar", id: 18007 },
    { name: "Dīgāleh", id: 18093 },

    { name: "Qarālar-e Mīrzā Ḩoseynqolī", id: 18557 },
    { name: "Protaras", id: 18918 },
    { name: "Kahrīz", id: 23814 },
    { name: "Nūrābād", id: 24851 },
    { name: "Rokan Sarā", id: 29033 }
  ];

  useEffect(() => {
    const citiesString = cities.map((city) => city.id).join(",");
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/group?id=${citiesString}&appid=${API_KEY}`
      )
      .then((res) => {
        const mainWeatherData = res.data.list.map((wd) => wd.main);
        setWeatherData(mainWeatherData);
      })
      .catch((error) => {
        console.log("Error ->", error.response.data);
      });
  }, []);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPost = [...weatherData].slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="page">
        <Post posts={currentPost} />
        <Pagination
          postPerPage={postPerPage}
          totalPost={weatherData.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};
export default City;
