import {Chart} from "react-google-charts";

const data = [
 ["Task", "payment Mode"],
 ["Upfront", 11],
 ["Installment", 4],
 ["Deposit", 8]
];

const options = {
 title: "Billing Category"
};

const GraphChart = () => {


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