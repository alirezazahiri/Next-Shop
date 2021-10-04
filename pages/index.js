import { useEffect } from "react";
import get from "../services/api";

const Home = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await get();
      return data;
    };

    fetchAPI();
  }, []);
  return <div></div>;
};
export default Home;
