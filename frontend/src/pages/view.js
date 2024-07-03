import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";

//redux
import { Link, Redirect } from "react-router-dom";

const View = () => {
  const dispatch = useDispatch();
  const viewTodo = useSelector((state) => state.TodoReducer.viewTodo);
  const loading = useSelector((state) => state.TodoReducer.loading);

  useEffect(() => {
    // dispatch(getList())
    //console.log('dsd')
  }, []);

  console.log("dsd");
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <List style={{ marginTop: "50px" }}>
          <ListItemText primary="title here" secondary="description here" />
        </List>
      )}
    </>
  );
};

export default View;
