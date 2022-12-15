import {useQuery} from '@apollo/client';
import {GET_CUSTOMERS} from "../../queries/queries";


const TableCard = () => {

    const {data, loading, error} = useQuery(GET_CUSTOMERS);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Something went wrong ...</p>

    return (
        <>
            <div className="table_container">
                <table className="dash-table">
                    <thead>
                    <tr className="Header_th">
                        <th scope="col">N.</th>
                        <th scope="col">Names</th>
                        <th scope="col">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!loading && !error &&
                        data.customers.map((item, index) =>{
                            return (
                                <tr className="body_th" key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableCard