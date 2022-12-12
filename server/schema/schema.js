const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = require('graphql');

//Bring in mongoose models

const Customer = require('../models/Customer');
const Project = require('../models/Project');

//Create customer type

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        address: {type: GraphQLString}
    })
});

//Create Project Type

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        paymentMode: {type: GraphQLString},
        customer: {
            type: CustomerType,
            resolve(parent, args){
                return Customer.findById(parent.id);
            }
        }
    })
});

//Create query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //get all customers
        customers: {
            type: new GraphQLList(CustomerType),
            resolve(parent, args) {
                return Customer.find();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})