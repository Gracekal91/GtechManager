import {gql} from '@apollo/client';


const GET_CUSTOMERS = gql`
    query getCustomers{
        customers{
            id
            name
            email
            phone
        }
    }
`;

const GET_PROJECTS = gql`
    query getProjects{
        projects{
            id
            name
            description
            status
            paymentMode
        }
    }
`;


export {
    GET_CUSTOMERS,
    GET_PROJECTS
}