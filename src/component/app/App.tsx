import { Info } from '../info/info'
import { Keyboard } from '../keyboard/keyboard'
import { Actions } from '../actions/actions'
import './App.css'

export function App() {
 
  return (
    <>
        <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  )
}
