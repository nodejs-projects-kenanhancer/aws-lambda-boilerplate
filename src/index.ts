import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Context, APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { HttpNotFoundError } from './domain/http';

export const handler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyStructuredResultV2> => {

    throw new HttpNotFoundError({ firstName: 'kenan' });

    return {
        statusCode: 200,
        body: `OK`
    }
}
