import './App.css'
import { Navbar, Hero, AboutMe, Skills, Portfolio } from './feature';

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Portfolio />
      </div>
    </div>
  )
}

export default App
