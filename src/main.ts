import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }))

  // cors enable

  app.enableCors ();


  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Shepherd')
    .setDescription('Gestion des eglises')
    .setVersion('1.0')
    .addTag('Shepherd')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
