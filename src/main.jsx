import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Card from './componentes/card/card'
import BotonGlobal from './componentes/BotonGlobal/BotonGlobal'
import Menu from './Menu/Menu'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <div className='test'>
      <Card titulo="Casa de fin de semana" subtitulo="Cuernavaca con alberca y todo chulo" precio="$45,000" />
      <Card titulo="Para dominguiar" subtitulo="Pequeña casa chida" precio="$35,000" />
    </div>
  </React.StrictMode>,
)
