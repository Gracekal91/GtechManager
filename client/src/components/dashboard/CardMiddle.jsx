import {GET_CUSTOMERS} from "../../queries/queries";
import {useQuery} from "@apollo/client";

const CardMiddle = () => {

    const {data, loading, error} = useQuery(GET_CUSTOMERS);

    if (loading) return <p>Loading ...</p>
    if (error) return <p>Something went wrong, please try again</p>

    return (
        <>
            <div className="dashboard_card_container">
                {!loading && !error &&
                    <>
                        <p>Icon</p>
                        <h5>{data.customers.length}</h5>
                        <p>customers in total</p>
                    </>
                }
            </div>
        </>
    )
}

export default CardMiddle