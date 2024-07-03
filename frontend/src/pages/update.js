import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Container, Typography } from "@mui/material";
import UpdateTodoForm from "../components/updateTodoForm";
import Loader from "../components/loader";

//redux
import { Link, Redirect } from "react-router-dom";

const Update = () => {
  const dispatch = useDispatch();
  const viewTodo = useSelector((state) => state.TodoReducer.viewTodo);
  const loading = useSelector((state) => state.TodoReducer.loading);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Update Item
      </Typography>
      {loading ? <Loader /> : <UpdateTodoForm viewTodo={viewTodo} />}
    </Container>
  );
};

export default Update;
