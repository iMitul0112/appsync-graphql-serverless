const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB()

module.exports.handler = async (event) => {
    const id = event.arguments.id

    const params = {
      Key: {
          "id": {
              S: id
          }
      },
      TableName: process.env.FACULTY_TABLE
    }


    return dynamodb.deleteItem(params).promise()
        .then(data => {            
            return {
                id
            }
        })
        .catch(err => {
          console.log(err)
        })
};