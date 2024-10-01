import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days</h1>
      <h2>Your personalized schedule is below:</h2>
      <Calendar />


      
    </div>
  )
}

export default App