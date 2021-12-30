import { useEffect, useState } from "react";

const useFetchData = (lat, lon) => {
  const url = ` https://weather-proxy.freecodecamp.rocks/api/current?lat=${lat}&lon=${lon}`;
  const [data, setData] = useState(null);

  useEffect(async () => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    setData(data);
  }, [lon, lat]);

  return { data };
};

export default useFetchData;
