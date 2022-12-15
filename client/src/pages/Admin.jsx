import DashboardContent from "../components/dashboard/DashboardContent";
import Header from "../components/share/Header";
import DashboardPanel from "../components/dashboard/DashboardPanel";

const Admin = () =>{
    return(
        <>
            <Header isAdmin="true"/>
            <div className="dashboard_container">
                <DashboardPanel />
                <DashboardContent />
            </div>
        </>
    )
}

export default Admin