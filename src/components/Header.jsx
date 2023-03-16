import '../App.css';
import logo from '../components/images/logo1.png'


function Header() {

    return (
        <header>
      <img className='logo' src={logo} alt='Logo do site'/>
      <h1>ChatGPT-IA</h1>
      <img className='logo' src={logo} alt='Logo do site'/>
      </header>
    )
}

export default Header;