import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
   <NavBar></NavBar>
   <h1 className='text-4xl mt-3'>PRICE-CLUB</h1>
   <Pricing></Pricing>
   <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
