import { useEffect } from "react";
import { useState } from "react";

function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let res = await fetch(URL);
    // console.log(res);
    let jsonRes = await res.json();

    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    // console.log(jsonRes);
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(URL);
      let jsonRes = await res.json();

      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <>
      <div>
        <h1>Jokes!!</h1>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getJoke}>New One!</button>
      </div>
    </>
  );
}

export default Joker;
