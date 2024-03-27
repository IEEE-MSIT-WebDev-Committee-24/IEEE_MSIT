import './style.css';
import { Link } from "react-router-dom";
import IEEE_logo from "../../../Assets/IEEE_white 1.png";
import { Link } from 'react-router-dom';

function MainComponent() {
    return (
        <div className="Main">
            <div className='login_button_container'>
                <Link to='/admin/login'><button className='login_button'>LOGIN</button></Link>
            </div>
            <div>
                <h2 className="logo_text">Advancing Technology for Humanity</h2>
                <img src={IEEE_logo} className="IEEE_logo m-auto" alt="logo" />
            </div>
            <div className="main_content">
                <h2 className="main_text">The Professional home for the Engineering and Technology world wide</h2>
            </div>

            <Link to="/membership" className="my-2">
                <button className='px-5 py-3 border-2 border-[#223140] bg-transparent rounded-xl font-bold text-white'>
                    Join IEEE
                </button>
            </Link>
        </div>
    );
}
export default MainComponent;