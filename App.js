import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// import GyroscopeSensor from './components/GyroscopeSensor'
// import AccelerometerSensor from './components/AccelerometerSensor'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...courseGoals, { id: currentGoals.length + goalTitle + 1, value: goalTitle }]);
    console.log([courseGoals]);
    setIsAddMode(false);
  };cd

  const removeGoalHandler = goalId => {
    console.log("to be deleted !!!", goalId);
    setCourseGoals(currentsGoals => {
      return currentsGoals.filter(goal => goal.id !== goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add goal' onPress={() => { setIsAddMode(true) }} />
      <GoalInput visible={isAddMode} addGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.id)} />}
      />
      {/* <GyroscopeSensor />
      <AccelerometerSensor /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

