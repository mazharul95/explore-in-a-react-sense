import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr.Mahfuj', job:'Singer'},
  {name: 'Eva Rahman', job:'Singer2'},
  {name: 'Agun', job:'Sopno'},
  {name: 'Shuvro', job:'pathor'}
];

function App() {
  const nayoks = ['Rubel','BappaDa','Kuber','Jashim','OmorSani',]
  return (
    <div className="App">
    {
      nayoks.map(nayok => <li>Name: {nayok}</li>)
    }
    {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    }
    {
      singers.map(singer => <Person name={singer.name}></Person>)
    }
   
     {/*
      <Person name={nayoks[0]} nayika="Mousumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person>
      */}
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
