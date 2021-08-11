import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, APIGatewayProxyResultV2, Context } from "aws-lambda";


export const lambdaHandler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {

    return { statusCode: 200, body: "OK" };
};