import './App.css'
import { Buttonhace } from './components/RandomComponent';


function App() {
  
  const buttonText = "numero :";
  const alertText = "es par o impar";
  return (
    <>
      <h1>averigua si el numero es par o impar</h1>
      <Buttonhace text={buttonText} text1={alertText}/>
      
    </>
  )
}

export default App