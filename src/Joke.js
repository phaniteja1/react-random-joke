import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import useAxios from "./use-axios.js";

const styles = {
  card: {
    minWidth: 200
  },
  setup: {
    fontSize: "1.3rem"
  },
  punchline: {
    marginTop: "1rem"
  },
  button: {
    marginTop: "1rem"
  }
};

function Joke(props) {
  const { classes } = props;

  const [flag, triggerFlag] = useState(0);

  const { response, loading, error } = useAxios(
    `https://official-joke-api.appspot.com/random_joke`,
    "GET",
    {},
    flag
  );

  const { data } = response || {};

  return (
    <Card className={classes.card}>
      <CardContent>
        {loading && <p>Loading...</p>}
        {error && <p>Error!</p>}
        <p className={classes.setup}>{data && data.setup}</p>
        <p className={classes.punchline}>{data && data.punchline}</p>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => triggerFlag(!flag)}
        >
          Get another joke
        </Button>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(Joke);
