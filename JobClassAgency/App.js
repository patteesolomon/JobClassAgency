import logo from './logo.svg';
import './App.css';
import { State } from 'vscode-languageclient/client';
import { ReferencesRequest } from 'vscode-languageclient';
import JobList from './JobList';

function App() {
  const useState = new State();
  const useRef = new ReferencesRequest();
  const useEffect = localStorage.getItem(); // im probbably wrong about this one

  const [todos, setTodos] = useState([]);
  const todoText = useRef();
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  },[]); // grabs stuf from local storage when the component is first initialized

  function addTodo(event)
  {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
  }
  return (
    
    <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt = "logo" />
        <p>
            you gai
            <div>
        <ul>
            {todos.map(todo => (<li key={todo}>{todo}</li>))}
              </ul>
            <form onSubmit = {addTodo}>
              <input ref = {todoText}></input>
            </form>
      </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dating sites are a scam.
        </a>
      </header>
    </div>
  );
}

export default App;