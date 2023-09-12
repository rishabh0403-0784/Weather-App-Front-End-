import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment-timezone";

import TodaysWeather from "../components/TodaysWeather";
import HourlyWeather from "../components//HourlyWeather";
import WeeklyWeather from "../components//WeeklyWeather";
import SearchBox from "../components/SearchBox";
import LoadingPage from "../components/LoadingPage";

import { getWeather } from "../services";

const getHourlyWeather = (hourlyData, timezone) => {
  const endOfDay = moment().tz(timezone).endOf("day").valueOf();
  const eodTimeStamp = Math.floor(endOfDay / 1000);

  const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

  return todaysData;
};

export default function City() {
  const [data, setData] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const params = useParams();

  const city = JSON.parse(window.atob(params.hash));

  useEffect(() => {
    async function fetchData() {
      const data = await getWeather(city.coord.lat, city.coord.lon);
      setData(data);
    }
    fetchData();
    document.title = city.name + " | Weather";
    // eslint-disable-next-line
  }, [params]);

  useEffect(() => {
    if (data !== null) {
      const { timezone, daily, hourly } = data;
      setTimezone(timezone);
      setWeeklyWeather(daily);
      setHourlyWeather(getHourlyWeather(hourly, timezone));
    }
  }, [data]);

  const loading =
    !city || !data || !timezone || !weeklyWeather || !hourlyWeather;

  if (loading) return <LoadingPage />;

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="container__inner">
          <div className="container__left-item">
            <Link to="/">&larr; Home</Link>
            <SearchBox placeholder="Search for another location..." />

            <TodaysWeather
              city={city}
              weather={weeklyWeather[0]}
              timezone={timezone}
            />
            <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
          </div>
          <div className="container__right-item">
            <WeeklyWeather weeklyWeather={weeklyWeather} timezone={timezone} />
          </div>
        </div>
      </div>
    </div>
  );
}
