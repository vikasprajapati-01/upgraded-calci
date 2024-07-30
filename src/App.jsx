import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  // const [check, setCheck] = useState(false);

  // const calculate = (e) => {
  //   console.log(value)
  //   if (!check) {
  //     console.log("if");
  //     () => setValue(eval(value));
  //     () => setCheck(true);
  //   }
  //   else {
  //     console.log("else");
  //     () => setValue('');
  //     () => setCheck(false);
  //   }
  // }

  return (
    <>
      <h1>Perform as much calculations as you can !!!</h1>
      <div className="calci">
        <div className="display">
          {value}
        </div>
        <button className='main-btn btn' onClick={() => setValue('')}>AC</button>
        <button className='btn' onClick={() => setValue(value.slice(0, -1))}>DEL</button>
        <button className='btn' onClick={() => setValue(value + '+')}>+</button>
        <button className='btn' onClick={() => setValue(value + '1')}>1</button>
        <button className='btn' onClick={() => setValue(value + '2')}>2</button>
        <button className='btn' onClick={() => setValue(value + '3')}>3</button>
        <button className='btn' onClick={() => setValue(value + '-')}>-</button>
        <button className='btn' onClick={() => setValue(value + '4')}>4</button>
        <button className='btn' onClick={() => setValue(value + '5')}>5</button>
        <button className='btn' onClick={() => setValue(value + '6')}>6</button>
        <button className='btn' onClick={() => setValue(value + '*')}>*</button>
        <button className='btn' onClick={() => setValue(value + '7')}>7</button>
        <button className='btn' onClick={() => setValue(value + '8')}>8</button>
        <button className='btn' onClick={() => setValue(value + '9')}>9</button>
        <button className='btn' onClick={() => setValue(value + '/')}>/</button>
        <button className='btn' onClick={() => setValue(value + '0')}>0</button>
        <button className='btn' onClick={() => setValue(value + '.')}>.</button>
        <button className='main-btn btn' onClick={() => setValue(eval(value))}>=</button>
      </div>
    </>
  )
}

export default App
