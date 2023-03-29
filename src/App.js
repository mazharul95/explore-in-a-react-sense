import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="bapparaz" nayika="Cheka"></Person>
      <Person name="Kuber" nayika="kopila"></Person>
      <h5>New Component, YAY</h5>
      <p>rock mama react mama</p>
      <Friend movie="shingam" phone="01724"></Friend>
      <Friend movie="Drisham" phone="01924"></Friend>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props){
  console.log(props)
  return (
    <div className='container'>
        <h3>Name: {props.movie}</h3>
        <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
