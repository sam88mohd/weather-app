import { useState, useEffect } from "react";

const useGetLocation = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      alert("Geolocation is not available in your browser");
    }
  }, []);

  return { latitude, longitude };
};

export default useGetLocation;
