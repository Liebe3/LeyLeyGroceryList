import "./App.css";
import Socialcomponent from "./components/Socialcomponent";
import TodoComponent from "./components/TodoComponent";
function App() {
  return (
    <>
      <div className="App">
        <TodoComponent />
        <div>
          <Socialcomponent/>
        </div>
      </div>
    </>
  );
}

export default App;
