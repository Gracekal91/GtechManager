import '../../assets/scss/dashboard.scss'
import DashboardCard from "./DashboardCard";
import GraphChart from '../share/GraphChart'
import TableCard from './TableCard'
import {GET_PROJECTS} from "../../queries/queries";
import {useQuery} from "@apollo/client";
import CardMiddle from "./CardMiddle";

const DashboardContent = () => {

 const {loading, error, data} = useQuery(GET_PROJECTS);

 if(loading) return <p>Loading ...</p>
 if(error) return <p>Unable to fetch data, please try again</p>

 return (
  <>
   {!loading && !error &&

   <div className="dbh_container">
    <div className="top_section">
     <DashboardCard newPoject="true"/>
     <DashboardCard progress="true"/>
     <DashboardCard completed="true"/>
    </div>
    <div className="middle_section">
     <div className="left_side">
      <CardMiddle />
      <DashboardCard project="true"/>
     </div>
     <div className="right_side">
      <GraphChart/>
     </div>

    </div>
    <div className="table_section">
     <h6 style={{marginLeft: '.5rem'}}>Most recent customers</h6>
     <TableCard data={data}/>
    </div>
   </div>
   }
  </>
 )

}

export default DashboardContent