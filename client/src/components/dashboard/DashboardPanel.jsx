import '../../assets/scss/dashboard.scss';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import LeftPanel from "./LeftPanel";
import SideMenu from "./SideMenu";
import {useState} from 'react';


const DashboardPanel = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleMeu = () =>{
        setToggleMenu(!toggleMenu)
    }


    return (
        <>
            <div className="dbp_container">
                <h1 className="admin" >ADMIN</h1>
                <h1 className="open" onClick={handleMeu}>
                    <BsFillArrowRightCircleFill />
                </h1>
               <LeftPanel />
                <LeftPanel isMobile="true"/>
            </div>
            {
                toggleMenu && <SideMenu />
            }

        </>
    )
}

export default DashboardPanel