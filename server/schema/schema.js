const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull, GraphQLEnumType
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
                return Customer.findById(parent.customerId);
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
        },
        //get all Projects
        projects:{
            type: GraphQLList(ProjectType),
            resolve(parent, args){
                return Project.find();
            }
        },

        //get a single project
        project:{
            type: ProjectType,
            args:{
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                return Project.findById(args.id);
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
               /* return Customer.findByIdAndRemove(args.id)*/
                //Delete customer and their projects
                Project.find({ customerId: args.id }).then((projects) => {
                    projects.forEach((project) => {
                        project.remove();
                    });
                });

                return Customer.findByIdAndRemove(args.id);
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

        },


        //Projects Mutations

        //create a project
        createProject:{
            type: ProjectType,
            args:{
                name: {type: GraphQLNonNull(GraphQLString)},
                description: {type: GraphQLNonNull(GraphQLString)},
                status: {type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            fresh: {value: 'Not started'},
                            progress: {value: 'In Progress'},
                            hold: {value: 'On Hold'},
                            done: {value: 'Completed'}
                        }
                    }),
                default: 'Not started'
                },
                paymentMode: {type: new GraphQLEnumType({
                        name: 'ProjectPaymentMode',
                        values: {
                            once: {value: 'up-front'},
                            installment: {value: 'fifty-fifty'},
                            half: {value: 'deposit'}
                        }

                    }),
                    default: 'Installment'
                },
                customerId:{
                    type: GraphQLNonNull(GraphQLID)
                },

            },
            resolve(parent, args){
                const project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    paymentMode: args.paymentMode,
                    customerId: args.customerId
                });
                return project.save();
            }
        },

        //Delete project

        deleteProject:{
            type: ProjectType,
            args:{
                id: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                return Project.findByIdAndRemove(args.id);
            }
        },
        //Update project

        updateProject:{
            type: ProjectType,
            args:{
                id: {type: GraphQLNonNull(GraphQLID)},
                name: {type: GraphQLString},
                description: {type:GraphQLString},
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            fresh: {value: 'Not started'},
                            progress: {value: 'In Progress'},
                            hold: {value: 'On Hold'},
                            done: {value: 'Completed'}
                        }
                    }),
                },
                paymentMode: {type: new GraphQLEnumType({
                        name: 'ProjectPaymentModeUpdate',
                        values: {
                            once: {value: 'up-front'},
                            installment: {value: 'fifty-fifty'},
                            half: {value: 'deposit'}
                        }

                    }),
                    default: 'Installment'
                }

            },
            resolve(parent, args){
                return Project.findByIdAndUpdate(
                    args.id,
                    {
                        $set:{
                            name: args.name,
                            description: args.description,
                            status: args.status,
                            paymentMode: args.paymentMode
                        }
                    },
                    {new: true}
                )
            }
        }

    })
})



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})