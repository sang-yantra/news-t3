import React, { useEffect, useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { getDateFormattedString } from "../../utils";
import type { ILocation } from "banner";
import TemperatureGraph from "./components/TemperatureGraph";
const date = getDateFormattedString("en-In");
function Banner() {
  const [location, setLocation] = useState<ILocation>({
    latitude: 0,
    longitude: 0,
  });
  const [errorLocation, seterrorLocation] = useState(false);
  useEffect(() => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          seterrorLocation(true);
        }
      );
    }
  }, []);

  return (
    <section className="border-b-4 border-black">
      <header className="flex items-center text-sm font-extrabold leading-tight sm:justify-center sm:text-5xl">
        <BsNewspaper className="sm:text-4xl" />
        <h1 className="ml-2 grow sm:grow-0">DAILY REPORT</h1>
        <span className=" inline-block self-end text-3xs">{date}</span>
      </header>
      <div>{location.latitude && <TemperatureGraph location={location} />}</div>
    </section>
  );
}

export default Banner;
