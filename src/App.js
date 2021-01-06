import React from 'react';
import './App.css';
import MyNewComponentActual from './components/MyNewComponent';
import LightSwitch from './components/LightSwitchComponent';

function App() {
  return (
    <div className="App">
      <LightSwitch/>
      lightswitch
      
      <MyNewComponentActual firstName={"Jane"} lastName={"Doe"} age={"45"} hairColor={"Black"}/>
      <MyNewComponentActual firstName={"John"} lastName={"Smith"} age={"88"} hairColor={"Brown"}/>
      <MyNewComponentActual firstName={"Millard"} lastName={"Fillmore"} age={"50"} hairColor={"Brown"}/>
      <MyNewComponentActual firstName={"Maria"} lastName={"Smith"} age={"62"} hairColor={"Brown"}/>
      <MyNewComponentActual header={"Header Prop"}>
        <p>This is a child1</p>
        <p>This is a child2</p>
        <p>This is a child3</p>
        <p>This is a child4</p>
      </MyNewComponentActual>
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <button onChange={ ()=> alert("On Change!") }>onChange</button>
      <button onSubmit={ ()=> alert("On Submit!") }>onSubmit</button>
      <button onFocus={ ()=> alert("On Focus!") }>onFocus</button>
      <button onBlur={ ()=> alert("Lost Focus - Blur!") }>onBlur</button>
    </div>
      
  );
}

export default App;
