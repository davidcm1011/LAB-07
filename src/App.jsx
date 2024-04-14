import './App.css'
import { Button } from './components/Button'


function App() {
 
  const buttonText = "Count +5 :";

  return (
    <>
      <h1>Aumenta de 5 en 5</h1>
      <Button text={buttonText}/>
    </>
  )
}

export default App
