import {useQuery} from '@apollo/client';
import {Chart} from "react-google-charts";
import {GET_PROJECTS} from '../../queries/queries';



const options = {
 title: "Billing Category"
};

const GraphChart = () => {
    const {data: datas, loading, error} = useQuery(GET_PROJECTS)
    let upfront;
    let installment;
    let deposit;


    if(loading) return <p>Loading ...</p>
    if(error) return <p>Something went wrong ...</p>


    if(!loading && !error){
        upfront = datas.projects.filter(item => item.paymentMode === 'up-front');
        installment = datas.projects.filter(item => item.paymentMode === 'fifty-fifty');
        deposit = datas.projects.filter(item => item.paymentMode === 'deposit');
    }
    const data = [
        ["Task", "payment Mode"],
        ["Upfront", upfront.length],
        ["Installment", installment.length],
        ["Deposit", deposit.length]
    ];

 return (
  <>
   <Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"200px"}
   />
  </>
 )
}

export default GraphChart