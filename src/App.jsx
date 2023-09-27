import { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  let useFetch = () => {
    setTitle(input);
  };
  useEffect(() => {
    if (title) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "09dce2443fmsh2ed2e65290fae4ap1c31f8jsnac0c0ac5c095",
          "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        },
      };

      fetch(
        `https://online-movie-database.p.rapidapi.com/auto-complete?q=${title}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => setError(err));
      console.log(data);
    }
  }, [title]);

  return (
    <div>
      <div className="search-bar">
        <input
          className="search-input input"
          placeholder="Search something here...."
          type="search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="search-btn " onClick={useFetch}>
          Search
        </button>
      </div>

      <div className="mainbox">
        {/* {!data && <h1>Please Search</h1>} */}

        {data &&
          data.d.map((e) => {
            console.log(data);
            if (e.y && e.l) {
              return (
                <div key={e.id}>
                  {
                    <div className="onebox">
                      <h1 className="title">{e.l}</h1>

                      <img src={e.i.imageUrl} className="imgs" />

                      <h3 className="year">{e.y}</h3>
                    </div>
                  }
                  {/* {e.l &&
              <div>
                {console.log(e.y)}
                
              </div>

              } */}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default App;
