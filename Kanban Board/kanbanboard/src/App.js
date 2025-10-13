import React from "react";
import Column from "./Column";
import Task from "./Task";
import { useState, useEffect, createContext, useContext } from "react";

import "./styles.css";

export const BoardContext = createContext();

const TaskBoardProvider = function () {
  const [ tasks, setTasks] = useState([
    { id: 1, title: 'Clean the desk', status: 'todo'},
    { id: 2, title: 'Finish BSc Thesis', status: 'todo'},
    { id: 3, title: 'Find internship', status: 'todo'},
  ]);

  const moveTask = function (taskId, newStatus) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // add useEffect here 💖

  return (
    <BoardContext.Provider value={{tasks, moveTask}}>
      <Board/>
    </BoardContext.Provider>
  );
};

const Board = function () {
  // add useContext here 💖

  return (
    <div className="board">
      <Column
        title="To Do 🪄"
        tasks={tasks.filter(function (task) {
          return task.status === "todo";
        })}
      />
      <Column
        title="In Progress 🚀"
        tasks={tasks.filter(function (task) {
          return task.status === "inProgress";
        })}
      />
      <Column
        title="Done 🌟"
        tasks={tasks.filter(function (task) {
          return task.status === "done";
        })}
      />
    </div>
  );
};

export default function App() {
  return <div className="App">{/* Add TaskBoardProvider here 💖  */}</div>;
}
