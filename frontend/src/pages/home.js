import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Container, Typography } from "@mui/material";
import Loader from "../components/loader";

import { useHistory } from "react-router-dom";

import TodoForm from "../components/TodoForm";

//redux
import { Link, Redirect } from "react-router-dom";
import { getList, viewTodo, deleteTodo } from "../stores/actions";

const TodoList = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.TodoReducer.todolist);
  const loading = useSelector((state) => state.TodoReducer.loading);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleView = (id) => {
    dispatch(viewTodo(id));
    history.push("/view");
  };

  const handleEdit = (id) => {
    dispatch(viewTodo(id));
    history.push("/update");
  };

  useEffect(() => {
    dispatch(getList());
  }, []);



  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Todo list
      </Typography>

      <TodoForm />

      {loading ? (
        <Loader />
      ) : (
        <List style={{ marginTop: "50px" }}>
          {todolist.map((todo) => (
            <ListItem
              key={todo._id}
              style={{
                backgroundColor: "whitesmoke",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              <ListItemText
                primary={todo.title}
                secondary={
                  todo.description.length > 3
                    ? todo.description.substring(0, 5) + "..."
                    : todo.description
                }
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(todo._id)}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="view"
                onClick={() => handleView(todo._id)}
              >
                <VisibilityIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => handleEdit(todo._id)}
              >
                <EditIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default TodoList;
