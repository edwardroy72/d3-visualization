import "./App.css";
import AppendingNewElement from "./components/AppendingNewElement";
import ModifyExistingElement from "./components/ModifyExistingElement";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="App-header">
        <h1 id="headingToBeModified">This is a pragraph</h1>
        <ModifyExistingElement></ModifyExistingElement>
        <AppendingNewElement></AppendingNewElement>
      </header>
    </div>
  );
}

export default App;
