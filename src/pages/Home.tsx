import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDarkEnabled, setDarkIsEnabled] = useState(false);

  function handleSwitchTheme() {
    setDarkIsEnabled((oldState) => !oldState);
  }

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle.length !== 0) {
      setTasks((oldState) => [
        ...oldState,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,
        },
      ]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const newTaskList = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }

      return task;
    });

    setTasks(newTaskList);
  }

  function handleRemoveTask(id: number) {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  }

  return (
    <>
      <Header onValueChange={handleSwitchTheme} isDarkEnabled={isDarkEnabled} />

      <View
        style={[
          styles.body,
          !isDarkEnabled
            ? { backgroundColor: "#FFF" }
            : { backgroundColor: "#191622" },
        ]}
      >
        <TodoInput addTask={handleAddTask} isDarkEnabled={isDarkEnabled} />

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          isDarkEnabled={isDarkEnabled}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
