const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB();

module.exports.handler = async (event) => {
    const id = event.arguements.id
    const name = event.arguements.name
    const description = event.arguements.desription

    const params = {
        Item: {
            "id": {
                S: id

            },
            "name": {
                S: name
            },
            "description": {
                S: description
            }
        },
        TableName: process.env.FACULTY_TABLE
    }

    return dynamoDB.putItem(params).promise()
        .then(data => {
            return {
                id,
                name,
                description
            }
        })
        .catch(err => {
            console.log(err)
        })
}