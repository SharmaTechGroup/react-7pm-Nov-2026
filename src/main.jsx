import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login/login.jsx'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { Flipkart } from './components/flipkart/flipkart.jsx'
import { Weather } from './components/weather/weather.jsx'
import { Shopping } from './components/shopping/shopping.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx'
import { MouseOverDemo } from './components/mouse-over-demo/mouse-over-demo.jsx'
import { MouseDownDemo } from './components/mouse-down-demo/mouse-down-demo.jsx'
import { MouseMoveDemo } from './components/mouse-move-demo/mouse-move-demo.jsx'
import { KeyDemo } from './components/key-demo/key-demo.jsx'

createRoot(document.getElementById('root')).render(
 
    <KeyDemo />
  
)
