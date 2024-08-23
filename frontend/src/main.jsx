import { render } from 'preact'
import  App  from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// render(<App />, document.getElementById('app'))
render(
    <BrowserRouter>
    <div className="dark:bg-slate-900 dark:text-white"><App /></div>
      
    </BrowserRouter>,
    document.getElementById('app')
  )
