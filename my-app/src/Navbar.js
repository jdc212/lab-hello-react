import ironhacklogo from './images/ironhack-logo.png';
import menutop from './images/menu-top.png';


function Navbar () {

    return (
        
    <div className= "Navbar">
        <img src={ironhacklogo} alt="ironhack logo" />
        <img src={menutop} alt="menu" /> 
    </div>

    
    
    )
      
}

export default Navbar