import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiBadRequestResponse, ApiUnprocessableEntityResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';

interface ApiOperationDecoratorOptions {
  type: any;
  summary: string;
  description: string;
}

export function ApiOperationDecorator({
  type, summary, description
}: ApiOperationDecoratorOptions) {
  return applyDecorators(
    ApiOperation({ summary }), // mo tar
    ApiOkResponse({ type, description }), // tra kq
    ApiUnauthorizedResponse({ description: 'token is invalid' }), // token 401
    ApiForbiddenResponse({ description: 'You do not have permission to access this resource' }), // gioi han quyen session template 403 
    ApiBadRequestResponse({ description: 'Bad request' }), // loi request 400
    ApiUnprocessableEntityResponse({ description: 'Validation error' }), // loi validate 422
    ApiInternalServerErrorResponse({ description: 'Internal server error' }) // loi server 500
  );
}