import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [view, setView] = useState(true);
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

  const displayType = () => {
    setView(!view);
  }

  const handleEvaluate = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      console.error("Syntax error in calculation:", error);
      alert("Invalid input");
    }
  }

  function fact(value) {
    for(let i = value - 1; i>=1; i--) {
      value = i * value;
    }
    setValue(value);
  }

  return (
    <>
      <h1>Scientific Calculator</h1>

      {/* Normal calculator code */}

      {view && <div className="normal-calci" >
        <div className="display">
          {value}
        </div>

        <button className='main-btn btn' onClick={() => setValue('')}>AC</button>
        <button className='btn' onClick={() => setValue((value[value.length-1] == '(' ? value.slice(0, -1) : (value[value.length-1] == 't' ? value.slice(0, -9) : (value[value.length-1] == 'n' || value[value.length-1] == 's' ? value.slice(0, -8) : value.slice(0, -1)))))}>DEL</button>
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
        <button className='main-btn btn' onClick={() => handleEvaluate()}>=</button>
        <div className="diff-func">
          <div className="change"  onClick={() => displayType()}>{(view == true) ? 'fx' : '123'}</div>
        </div>
      </div>
      }

      {/* Scientific calculator code  */}

      {!view && <div className="scientific-calci">
        <div className="display">
          {value}
        </div>

        {/* value.slice(0, -1) */}

        <button className='main-btn btn' onClick={() => setValue('')}>AC</button>
        <button className='btn' onClick={() => setValue((value[value.length-1] == '(' ? value.slice(0, -1) : (value[value.length-1] == 't' ? value.slice(0, -9) : (value[value.length-1] == 'n' || value[value.length-1] == 's' ? value.slice(0, -8) : value.slice(0, -1)))))}>DEL</button>
        <button className='btn' onClick={() => setValue(value * value)}>x²</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + '(' : value + '*(')}>(</button>
        <button className='btn' onClick={() => setValue(value + ')')}>)</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + 'Math.sqrt(' : (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/' || value[value.length - 1] == '%' || value[value.length - 1] == '(') ? value + 'Math.sqrt(' : value + '*Math.sqrt(')}>√</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + 'Math.cbrt(' : (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/' || value[value.length - 1] == '%' || value[value.length - 1] == '(') ? value + 'Math.cbrt(' : value + '*Math.cbrt(')}>∛</button>
        <button className='btn' onClick={() => setValue(value + ' 3.14')}>π</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + 'Math.sin(' : (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/' || value[value.length - 1] == '%' || value[value.length - 1] == '(') ? value + 'Math.sin(' : value + '*Math.sin(')}>sin</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + 'Math.cos(' : (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/' || value[value.length - 1] == '%' || value[value.length - 1] == '(') ? value + 'Math.cos(' : value + '*Math.cos(')}>cos</button>
        <button className='btn' onClick={() => setValue((value == '') ? value + 'Math.tan(' : (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/' || value[value.length - 1] == '%' || value[value.length - 1] == '(') ? value + 'Math.tan(' : value + '*Math.tan(')}>tan</button>
        <button className='btn' onClick={() => fact(value)}>x!</button>
        <button className='btn' onClick={() => setValue(value + '%')}>%</button>
        {/* <button className='btn' onClick={() => setValue(value + '')}></button>
        <button className='btn' onClick={() => setValue(value + '')}></button>
        <button className='btn' onClick={() => setValue(value + '')}></button>
        <button className='btn' onClick={() => setValue(value + '')}></button> */}
        <button className='main-btn btn' onClick={() => handleEvaluate()}>=</button>
        <div className="diff-func">
          <div className="change"  onClick={() => displayType()}>{(view == true) ? 'fx' : '123'}</div>
        </div>
      </div>
      }
    </>
  )
}

export default App
