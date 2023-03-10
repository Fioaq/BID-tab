import './App.css';
import Tab from './components/Tab';

function App() {
  const array= [
    {name: 'Tab 1',
    content: 'Tab 1 content is showing here.'},
    {name: 'Tab 2',
    content: 'Tab 2 content is showing here.'}, 
    {name: 'Tab 3',
    content: 'Tab 3 content is showing here.'}
  ]
  return (
    <div className="App">
      <Tab tab={array}/>
    </div>
  );
}

export default App;
