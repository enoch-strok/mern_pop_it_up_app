import React from 'react';
import './App.css';
import MyNewComponentActual from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponentActual firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"}/>
      <MyNewComponentActual firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"}/>
      <MyNewComponentActual firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"}/>
      <MyNewComponentActual firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"}/>
    </div>
      
  );
}

export default App;
