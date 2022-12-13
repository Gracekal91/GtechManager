const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
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
        },
        //get a single customer
        customer: {
            type: CustomerType,
            args:{
                id: {type: GraphQLID}
            },
            resolve(parent, args){
                return Customer.findById(args.id);
            }
        }
    }
});


//create mutations

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () =>({

        //create customer
        createCustomer:{
            type: CustomerType,
            args:{
                name: {type: GraphQLNonNull(GraphQLString)},
                email: {type: GraphQLNonNull(GraphQLString)},
                phone: {type: GraphQLNonNull(GraphQLString)},
                address: {type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                const customer = new Customer({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                    address: args.address
                })
                return customer.save();
            }
        },

        //Delete customer
        deleteCustomer:{
            type: CustomerType,
            args:{id:{type:GraphQLNonNull(GraphQLID)}},
            resolve(parent, args){
                return Customer.findByIdAndRemove(args.id)
            }
        },

        //update customer
        updateCustomer:{
            type: CustomerType,
            args:{
                id: {type: GraphQLNonNull(GraphQLID)},
                name: { type: GraphQLString},
                email: { type: GraphQLString},
                phone: { type: GraphQLString},
                address: { type: GraphQLString},
            },
            resolve(parent, args){
                return Customer.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            email: args.email,
                            phone: args.phone,
                            address: args.address
                        }
                    },
                    {new: true}
                );
            }

        }
    })
})



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})