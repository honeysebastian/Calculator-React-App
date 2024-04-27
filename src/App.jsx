import { useState } from 'react'
import './App.css'

function App() {

  const [inputValue,setInputValue]=useState("0")
  const [error, setError] = useState(null);


  const handleDisplay = (content) => {
    if (inputValue === "0" || error) {
      setInputValue(content);
      setError(null);
    } else {
      setInputValue(oldValue => oldValue + content);
    }

  }

  const handleEqual = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
      setError(null);
    } catch (error) {
      setInputValue('');
      setError('Error');
    }

  }

  const handleRemoveLast=()=>{
    setInputValue(oldValue => oldValue.slice(0, -1) || '0');
    setError(null);

  }
  const handleClear=()=>{
    setInputValue("0");
    setError(null);

  }


  return (
    <>
      <div className='main'>
        <div className="calculator bg-dark">
          <input type="text" className='input input-value' placeholder={error || '0'} value={inputValue} readOnly />
          <div className="first-row">
            <button onClick={handleClear} className='ac'>AC</button>
            <button onClick={handleRemoveLast} className='del'>DEL</button>
            <button onClick={() => handleDisplay('/')} className='btn-content'><i className="fa-solid fa-divide"></i></button>
          </div>
          <div className="second-row">
            <button onClick={() => handleDisplay('7')} className='btn-content'>7</button>
            <button onClick={() => handleDisplay('8')} className='btn-content'>8</button>
            <button onClick={() => handleDisplay('9')} className='btn-content'>9</button>
            <button onClick={() => handleDisplay('*')} className='btn-content'><i className="fa-solid fa-xmark"></i></button>
            <button onClick={() => handleDisplay('4')} className='btn-content'>4</button>
            <button onClick={() => handleDisplay('5')} className='btn-content'>5</button>
            <button onClick={() => handleDisplay('6')} className='btn-content'>6</button>
            <button onClick={() => handleDisplay('+')} className='btn-content'><i className="fa-solid fa-plus"></i></button>
            <button onClick={() => handleDisplay('1')} className='btn-content'>1</button>
            <button onClick={() => handleDisplay('2')} className='btn-content'>2</button>
            <button onClick={() => handleDisplay('3')} className='btn-content'>3</button>
            <button onClick={() => handleDisplay('-')} className='btn-content'><i className="fa-solid fa-minus"></i></button>
          </div>
          <div className="third-row">
            <button onClick={() => handleDisplay('0')} className='btn-content'>0</button>
            <button onClick={() => handleDisplay('.')} className='btn-content'>.</button>
            <button onClick={handleEqual} className='ac'><i className="fa-solid fa-equals"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
