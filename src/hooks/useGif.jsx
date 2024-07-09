import axios from "axios";
import { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/random?api_key=MglbKh1KMQeH0vLh1wO6OKAoIGhVaMvK`;
// const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=MglbKh1KMQeH0vLh1wO6OKAoIGhVaMvK&tag=${tag}&rating=g`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}&rating=g`: url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return {gif,loading,fetchData};
};
 
export default useGif;
