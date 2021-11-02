import "./App.css";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form />
      <Tasks />
    </div>
  );
}

export default App;
