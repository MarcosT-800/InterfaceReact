import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Buttons/InterfaceButton'
import Input from './components/Input/interfaceInput'
import './App.css'
import Card from './components/Cards/InterfaceCard'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState: any) => ({
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <Button label="Click Me!" />
      <Button label="Secondary Button" type="secondary" />
      <Button label="Outline Button" type="outline" onClick={() => alert('Clicked!')} />
      </div>

      <div>
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={handleInputChange}
        variant="secondary" // Defina a variante como 'primary'
      />
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={handleInputChange}
        variant="primary" // Defina a variante como 'primary'

      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={handleInputChange}
        variant="default" // Defina a variante como 'primary'
        />
    </div>

    <div>
    <Card
        title="Meu Card"
        content="Este é o conteúdo do meu card."
        imageSrc="https://i.pinimg.com/564x/95/c4/16/95c4162be205dd5b135e944826b4c94f.jpg"
        onClick={() => {
          console.log('Card clicado!');
        }}

        variant="primary" // Altere para 'primary', 'secondary' ou 'default' conforme necessário

      />
    </div>
    </>
  )
}

export default App
