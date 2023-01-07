import React, { useEffect, useState } from "react";
import type { HourEntity, ILocation } from "banner";
import { api } from "../../../utils/api";
import LineGraph from "../components/line-graph/LineGraph";

export interface ITemperatureGraph {
  location: ILocation;
}

function TemperatureGraph({ location }: ITemperatureGraph) {
  const { data: response, isFetched } = api.weather.getWeatherReport.useQuery({
    latitude: location.latitude.toString(),
    longitude: location.longitude.toString(),
  });
  const [graph, setGraph] = useState({});

  useEffect(() => {
    console.log(location.latitude);
  }, []);

  if (!isFetched) {
    return <div>Loading...</div>;
  } else {
    const hour = response?.forecast.forecastday[0]?.hour as HourEntity[];
    return (
      <div className="h-[250px]">
        <LineGraph data={hour} />
      </div>
    );
  }
}

export default TemperatureGraph;
