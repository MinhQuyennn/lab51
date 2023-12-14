import logo from './logo.svg';
import './App.css';
import UsingState from './components/UsingState';
import MyComponent from './components/MyComponent'
import { ThemeProvider } from "./theme/ThemeContext";

function App() {
  return (
    <div className="App">
        <UsingState/>
        <ThemeProvider>
          <MyComponent />
        </ThemeProvider>
    </div>
  );
}

export default App;