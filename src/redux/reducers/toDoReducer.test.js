import React from "react";
import { screen } from "@testing-library/react";
import actionTypes from "../actions/actionTypes";
import toDoReducer from "./toDoReducer";

describe("Given a Task component", () => {
  describe("When it receives a toDo list and a load action'", () => {
    test("Then it should return a new state", () => {
      const toDoList = [];

      const createdTasks = [
        {
          task: "Eat pizza",
          id: "1",
        },
        {
          task: "Surf",
          id: "2",
        },
        {
          task: "Listen to music",
          id: "3",
        },
      ];

      const action = {
        type: actionTypes.loadtoDoList,
        newtoDoList: createdTasks,
      };

      const newTasks = toDoReducer(toDoList, action);

      expect(newTasks).toEqual(createdTasks);
    });
  });
  describe("When it receives a toDo list and a delete action with id", () => {
    test("Then it should return a new to do list without the task received", () => {
      const toDoList = [
        {
          task: "Eat pizza",
          id: "1",
        },
        {
          task: "Surf",
          id: "2",
        },
        {
          task: "Listen to music",
          id: "3",
        },
      ];

      const taskToDelete = toDoList[0];

      const action = {
        type: actionTypes.deleteTask,
        newtoDoList: taskToDelete.id,
      };

      const newTasks = toDoReducer(toDoList, action);

      expect(newTasks).not.toContainEqual(taskToDelete);
    });
  });
  describe("When it receives a toDo list and an unknown action", () => {
    test("Then it should return the received to do list", () => {
      const toDoList = [
        {
          task: "Eat pizza",
          id: "1",
        },
        {
          task: "Surf",
          id: "2",
        },
        {
          task: "Listen to music",
          id: "3",
        },
      ];

      const action = {
        type: "nothing",
      };

      const newTasks = toDoReducer(toDoList, action);

      expect(newTasks).toEqual(toDoList);
    });
  });
});
