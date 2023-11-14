import { Info } from '../../../features/components/phone/info/info'
import { Keyboard } from '../../../features/components/phone/keyboard/keyboard'
import { Actions } from '../../../features/components/phone/actions/actions'
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
