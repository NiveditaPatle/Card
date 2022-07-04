import Card from './Component/Card';
import './App.css';

function App() {
  return (
    <>
      <h3>Total Projects = 4, Total Budget = 18000</h3>
      <div className='card_div'>
        <Card ProjectNo="Project 01" Budget="5000" />
        <Card ProjectNo="Project 02" Budget="4000" />
        <Card ProjectNo="Project 03" Budget="1000" />
        <Card ProjectNo="Project 04" Budget="8000" />
      </div>
    </>
  );
}

export default App;
