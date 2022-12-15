import '../../assets/scss/header.scss'
import {MdArrowBackIosNew} from "react-icons/md";

const Header = ({isAdmin}) => {
    return (
        <>
            <div className="header_container">
                <div className="header_content">
                    <div className="logo" style={{display: 'flex'}}>

                        {isAdmin ?
                            <a href="/">
                                <h3><MdArrowBackIosNew/></h3>
                            </a>
                            :
                            <h3>Gtech</h3>
                        }
                    </div>
                    <div className="menu">
                        <ul>
                            {isAdmin ?
                                <a href="/">
                                    <li>Home</li>
                                </a>
                                :
                                <>
                                    <a href="client/src/components/share/Header#">
                                        <li>About</li>
                                    </a>
                                    <a href="/dashboard">
                                        <li>Admin</li>
                                    </a>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header