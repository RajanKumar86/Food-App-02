import { useEffect, useState } from "react";
import { MENU_url } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_url + resId);
    const json = await res.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
