import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div>
            <h1>Todos</h1>
            
            <div className="card">
              <p>Please note: Below are just the most important todos - feel free to add more.</p>
            </div>
            
            <ul>
              <Card 
              title={"Learn React"} 
              subtitle={"Learn React fundamentals & explore core concepts"}></Card>

              <Card 
              title={"Practice React"} 
              subtitle={"Apply your knowledge & build demo projects"}></Card>
            </ul>
        </div>
  );
}

export default App;
