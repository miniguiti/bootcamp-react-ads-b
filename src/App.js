import './assets/css/style.css'
import Login from './pages/Login'
import LoginRedirect from './pages/LoginRedirect'
import Teacher from './pages/Teacher'
import Routes from './routes'

function App() {
  const scriptIcons = document.createElement("script")
  scriptIcons.src = "https://kit.fontawesome.com/9e43a3780f.js"
  document.body.appendChild(scriptIcons)

  return (
    <Routes/>
  );
}

export default App;
