exports.handler = (event, context, callback) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello World, this is Morgan. This Lambda Function was deployed using AWS tSAM!')
    };
    callback(null, response);
};
