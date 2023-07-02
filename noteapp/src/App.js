import './App.css';
import Notes from './componenets/Notes';
function App() {
  const list = [
    {
      name: "Milk", 
      id: 0
    }, 
    {
      name: "Pop", 
      id: 1
    }, 
    {
      name: "Bread",
    id: 2
  }, 
    {
      name: "Chocolate", 
    id: 3
  }, 
    {
      name: "Strawberry Milkshake", 
      id: 4
  }, 
    {
      name: "Skittles", 
    id: 5
  }
  ]

  const addToList = (e) => {
    if(e.key === "Enter" && e.target.innerhtml !== "") {
    list.push({name: e.target.innerhtml}, {id: list.length + 1});
    console.log(list);
    } else {
      console.log("Failed to add to notes");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Notes props={list}/>
        <input placeholder='Enter your note here!' onKeyDown={addToList}/>
      </header>
    </div>
  );
}

export default App;
