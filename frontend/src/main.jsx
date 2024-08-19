import { render } from 'preact'
import  App  from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// render(<App />, document.getElementById('app'))
render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  )
