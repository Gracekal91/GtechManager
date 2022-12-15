const TableCard = () =>{
    return(
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
                <tr className="body_th">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TableCard