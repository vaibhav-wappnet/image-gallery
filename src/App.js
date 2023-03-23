import './App.css';
import Header from "./Components/Header";
import Images from "./Components/Images";
import SearchField from "./Utils/SearchField";

function App() {
  return (
    <div className="App">
      <Header>
        <SearchField />
      </Header>
      <Images />
    </div>
  );
}

export default App;
