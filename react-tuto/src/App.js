import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import React, { useState } from 'react';
function App() {
  // useState always returns an array with 2 elements
  const [courseGoals, setCourseGoals] =  useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    // use concat instead of push because react wants 
    // us to return a new array to re-render the component.
    // setCourseGoals(courseGoals.concat(newGoal));
    // The update state operations need to be scheduled,
    // Which means our state update can be deferred due to race conditions.
    // The functional approach mantains the correct order of updates,
    // as we are expliciting the state dependencies.
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
