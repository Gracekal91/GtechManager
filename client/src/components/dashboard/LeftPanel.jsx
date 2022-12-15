import {RxDashboard} from "react-icons/rx";
import {IoIosPeople} from "react-icons/io";
import {GoProject} from "react-icons/go";

const LeftPanel = ({isMobile}) => {
    return (
        <>
            <ul className={isMobile ? 'open' : 'admin'}>
                <a href="">
                    {
                        isMobile ? <div><IoIosPeople/></div>
                            :
                            <>
                                <div>
                                    <IoIosPeople/>
                                </div>
                                <li>Dashboard</li>
                            </>
                    }


                </a>
                <a href="">
                    {
                        isMobile ? <div><RxDashboard/></div>
                            :
                            <>
                                <div>
                                    <RxDashboard/>
                                </div>
                                <li>Customers</li>
                            </>
                    }
                </a>
                <a href="">
                    {
                        isMobile ? <div><GoProject/></div>
                            :
                            <>
                                <div>
                                    <GoProject/>
                                </div>
                                <li>Projects</li>
                            </>
                    }
                </a>
            </ul>
        </>
    )
}

export default LeftPanel