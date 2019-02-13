import React, { useState } from "react";
import { Button, Card, CardContent } from "@material-ui/core";

import useAxios from "./use-axios.js";

function Joke() {
  const [flag, triggerFlag] = useState(0);

  const { response, loading, error } = useAxios({
    url: `https://official-joke-api.appspot.com/random_joke`,
    method: "GET",
    trigger: flag
  });

  const { data } = response || {};

  return (
    <Card>
      <CardContent>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <h4>{data && data.setup}</h4>
        <p>{data && data.punchline}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => triggerFlag(!flag)}
        >
          Get another joke
        </Button>
      </CardContent>
    </Card>
  );
}

export default Joke;
