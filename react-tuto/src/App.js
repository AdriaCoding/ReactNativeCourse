import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
function App() {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'}
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal/>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
