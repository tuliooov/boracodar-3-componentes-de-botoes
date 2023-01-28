import './index.css'
import { Button } from "./components/molecules/Button/Button"
import { GiHamburgerMenu } from 'react-icons/gi'

function App() {
  return (
    <>
      <main>
        <h1>Variações de Botões</h1>
        <section>
          <Button 
            variant="primary"
          >
            DEFAULT primary
          </Button>
          <Button 
            variant="primary"
            disabled
          >
            DEFAULT primary
          </Button>
          <Button 
            variant="primary"
            isLoading
          >
            DEFAULT primary
          </Button>
          <Button 
            variant="primary"
            icon={GiHamburgerMenu}
          >
            DEFAULT primary
          </Button>
          <Button 
            variant="secondary"
          >
            DEFAULT secondary
          </Button>
          <Button 
            variant="secondary"
            disabled
          >
            DEFAULT secondary
          </Button>
          <Button 
            variant="secondary"
            isLoading
          >
            DEFAULT secondary
          </Button>
          <Button 
            variant="secondary"
            icon={GiHamburgerMenu}
          >
            DEFAULT secondary
          </Button>
          <Button 
            variant="tertiary"
          >
            DEFAULT tertiary
          </Button>
          <Button 
            variant="tertiary"
            disabled
          >
            DEFAULT tertiary
          </Button>
          <Button 
            variant="tertiary"
            isLoading
          >
            DEFAULT tertiary
          </Button>
          <Button 
            variant="tertiary"
            icon={GiHamburgerMenu}
          >
            DEFAULT tertiary
          </Button>
        </section>
      </main>
      <footer>
        <p>
          &copy; 2023{' '}
          <a href="https://github.com/tuliooov"> Tuliooov #BoraCodar</a>
          <br></br>
          Desafio 03 - Run until you fly!
        </p>
      </footer>
    </>
  )
}

export default App
