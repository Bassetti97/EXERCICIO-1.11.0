import { useState } from 'react'
import './App.css'
import React from 'react'
import Mensagem from './Mensagem'
import Titulo from './Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
  <div class="chat">
      <Titulo/>
  <div class="content">
    <ul>

      <Mensagem mensagem="Oi, boa tarde" visualizado={false} remetente={false} />
      <Mensagem mensagem="Tu não me ama mais?" visualizado={false} remetente={false} />
      <Mensagem mensagem="Oi pessoa!" visualizado={true} remetente={true} />
      <Mensagem mensagem="Prefiro não comentar sobre o assunto" visualizado={true} remetente={true} />
    
    </ul>
  </div>
</div>

</body>
    </>
  )
}

export default App
