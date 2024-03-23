import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const FooterComponent = () => {
    return (
        <footer style={{margin:0}} >
                <div style={{backgroundColor: '#1E1E1E'}} className="footer">
                {/* <div className="footerCol"><a href="httieee.msit.in">Contact Us</a></div> */}
                {/* <div className='borderLeft'></div>                 */}
                <div className="footerCol"><a href="https://www.ieee.org/membership/join/index.html">JOIN IEEE</a></div>
<div className='borderLeft'></div>                

                <div className="footerCol"><a href="https://msit.in">Maharaja Surajmal Institute of Technology</a></div>
<div className='borderLeft'></div>                

                <div className="footerCol">Copyright &copy; 2023, IEEE MSIT</div>
                </div>
        </footer>
    );
}
export default FooterComponent;