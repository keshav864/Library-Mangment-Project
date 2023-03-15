import { Link } from "react-router-dom";
import '../styles/ladingPage.css'

const LandlingPage = () => {
    return (
        <div className="landlingpage">
            <div className="selectLoginType">
                <div className="head">
                    <h1>Library Management System</h1>
                </div>
                <div className="logo">
                    <img src="images/adminlogo.png" alt="" />
                    <img src="images/userlogo.png" alt="" />
                </div>
                <div className="btn">
                    <div className="adminbtn">
                    <button><Link to='/admin-login'>Admin</Link></button>
                    </div>
                    <div className="userbtn">
                    <button ><Link to='/user-login'>User</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandlingPage;