import React, { useState } from 'react';
import './App.css';

function TagEditor(props){
  const [tageInput, setTageInput] = useState('')
  
  const onRemoveTag = (idx) => {
    props.onChange(props.value.filter((value, index) => index !== idx));
  }
  return( 
    <div className="TageWrap">
      {props.value.map((tag, idx) => <div key={idx} className="tag">{tag}<i onClick={() => onRemoveTag(idx)}>x</i></div>)}
      <div className="input">
          <input  type="text" 
          value={tageInput} 
          onChange={e => setTageInput(e.currentTarget.value)} 
          onKeyPress={e => {
              if(e.nativeEvent.key === "Enter" && tageInput !== "") {
                props.onChange([...props.value, tageInput]);
                setTageInput('');
              }
          }}/>
      </div>
    </div>
  )
}

function App() {
  const [tages, setTages] = useState(["c++","php"])

  return (
    <div className="App">
        <div>
          <TagEditor value={tages} onChange={value => setTages(value)} />
        </div>
    </div>
  )
}

export default App;
