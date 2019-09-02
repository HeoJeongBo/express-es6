import axios from "axios";

async function movie(req, res, next) {
  const { query } = req.body;
  const encodedURI = encodeURI(query);
  const options = {
    method: "GET",
    headers: {
      "Access-Control-Origin": "*",
      "X-Naver-Client-Id": "XfAx6Fek9WKL7vKCJ9e8",
      "X-Naver-Client-Secret": "mT8wg_ZrgM",
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
