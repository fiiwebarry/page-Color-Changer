import { useState } from 'react';
import { simpleColorChange } from './assets/Components/Data';


import './App.css'




function App() {



  const [color, setColor] = useState(0)
  const [colorCode, SetColorCode] = useState("Name")


  const toggleColorCode = (code) => {
    SetColorCode(code);
  }


  const ColorSwitch = () => {

    const randomIndex = Math.floor(Math.random() * simpleColorChange.length);
    setColor(simpleColorChange[randomIndex]);


  }


  return (
    <section>
      <div className='holder'>
        <div className='container'>
          <nav className='nav-section'>

            <h2>Color Flipper</h2>

            <div className='color-sector'>
              <ul className='color-sector'>
                <li><a href="#" onClick={() => toggleColorCode('Name')}>Simple</a></li>
                <li><a href="#" onClick={() => toggleColorCode('hex')}>Hex</a></li>
              </ul>

            </div>
          </nav> </div>
      </div>

      <main style={{ backgroundColor: color.hex }}>
        <div className='ok-btn'>
          <div className='background-btn'>
            <p className="background-tab">
              Background-color: {colorCode === 'Name' ? color.Name : color.hex}
            </p>

            <button className='btn' onClick={ColorSwitch} >Change Color</button>
          </div>
        </div>

      </main>
    </section>
  )
}

export default App
