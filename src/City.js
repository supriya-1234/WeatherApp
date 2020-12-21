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
    { name: "berlin", id: 2960 },
    { name: "delhi", id: 3245 },
    { name: "mumbai", id: 3530 },
    { name: "seoul", id: 5174 },
    { name: "tokyo", id: 7264 },
    { name: "paris", id: 8084 },
    { name: "amritsar", id: 9874 },
    { name: "patna", id: 11263 },
    { name: "new york", id: 11754 },
    { name: "kabul", id: 12795 },
    { name: "kyoto", id: 14177 },
    { name: "mohali", id: 14256 },
    { name: "brasilia", id: 18007 },
    { name: "chandigarh", id: 18093 }
  ];

  useEffect(() => {
    const citiesString = cities.map((city) => city.id).join(",");
    axios
      .get(
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
      <Post posts={currentPost} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={weatherData.length}
        paginate={paginate}
      />
    </>
  );
};
export default City;
