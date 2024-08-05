import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // setup api
  app.setGlobalPrefix('api');
  // setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Bookings API')
    .setDescription('Bookings API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);


  //set global validation pipe , customs validation
  app.useGlobalPipes(new ValidationPipe(
    {
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
    },
    validationError: {
      target: false,
    },
    transform: true,
  }),
  );
  await app.listen(3000);
}
bootstrap();
