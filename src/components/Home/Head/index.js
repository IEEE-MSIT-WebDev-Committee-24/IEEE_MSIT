import './style.css';
import IEEE_logo from "../../../Assets/IEEE_white 1.png";

function MainComponent() {
    return (
        <div className="Main">
            <div>
                <h2 className="logo_text">Advancing Technology for Humanity</h2>
                <img src={IEEE_logo} className="IEEE_logo"/>
            </div>
            <div className="main_content">
                <h2 className="main_text">The Professional  home for the Engineering and Technology world wide </h2>
                
            </div>
        </div>
    );
}
export default MainComponent;