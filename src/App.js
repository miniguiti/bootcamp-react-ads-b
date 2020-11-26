import './assets/css/style.css'
import Login from './pages/Login'
import LoginRedirect from './pages/LoginRedirect'
import Teacher from './pages/Teacher'

function App() {
  const scriptIcons = document.createElement("script")
  scriptIcons.src = "https://kit.fontawesome.com/9e43a3780f.js"
  document.body.appendChild(scriptIcons)

  return (
    <LoginRedirect/>
  );
}

export default App;
