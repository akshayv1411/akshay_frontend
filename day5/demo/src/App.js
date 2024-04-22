import './App.css';
import Table from './components/Table';
import Welcome from './components/Welcome';

function App() {
  let name = "John";
  return (
  
    <div className="App">
      <Table/>
      <Welcome name = {name} age = {10}/>
    </div>
  );
}

export default App;