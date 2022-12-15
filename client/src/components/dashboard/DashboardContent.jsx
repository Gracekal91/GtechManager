import '../../assets/scss/dashboard.scss'
import DashboardCard from "./DashboardCard";
import GraphChart from '../share/GraphChart'
import TableCard from './TableCard'

const DashboardContent = () => {
 return (
  <>
   <div className="dbh_container">
    <div className="top_section">
     <DashboardCard/>
     <DashboardCard/>
     <DashboardCard/>
    </div>
    <div className="middle_section">
     <div className="left_side">
      <DashboardCard/>
      <DashboardCard/>
     </div>
     <div className="right_side">
      <GraphChart/>
     </div>

    </div>
    <div className="table_section">
     <TableCard/>
    </div>
   </div>
  </>
 )

}

export default DashboardContent