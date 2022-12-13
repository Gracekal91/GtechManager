import '../assets/scss/header.scss'

const Header = ()=>{
    return(
        <>
            <div className="header_container">
                <div className="header_content">
                    <div className="logo"><h3>Gtech</h3></div>
                    <div className="menu">
                        <ul>
                            <a href="#">
                                <li>About</li>
                            </a>
                            <a href="#">
                                <li>Admin</li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header