import axios from "axios";

async function movie(req, res, next) {
  const { query } = req.body;
  const encodedURI = encodeURI(query);
  const options = {
    method: "GET",
    headers: {
      "Access-Control-Origin": "*",
      "Content-Type": "application/json"
    },
    url: `https://openapi.naver.com/v1/search/movie.json?query=${encodedURI}&display=100&start=1`
  };
  let data;
  await axios(options).then(response => (data = response.data.items));
  console.log(data);
  res.status(500).json({
    data
  });
}

export { movie };

//const callMovielistApi = query =>
