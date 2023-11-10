import * as React from "react";
import {Button, Grid} from "@chakra-ui/react";
import {useAtom} from "jotai";
import {todosAtom} from "../store";

function TopBar() {
  const [, setTodos] = useAtom(todosAtom)

  const onLoad = async () => {
    const resp = await fetch("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json")
    const data = await resp.json()
    setTodos(data)
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
