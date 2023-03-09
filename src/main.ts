import { NestFactory } from '@nestjs/core';
import { AppModule } from './setup/app.module';
import {ValidationPipe} from "@nestjs/common";
import {SERVICE_NAME} from "./setup/config/constants";
import {Config} from "./setup/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  await Config.init();
  const app = await NestFactory.create(AppModule);

  //Basic Configs
  app.enableCors({
    origin: Config.config.corsAllowedOrigin,
    allowedHeaders: [ "content-type"],
  });
  app.enableShutdownHooks();
  app.setGlobalPrefix(SERVICE_NAME);
  app.useGlobalPipes(new ValidationPipe({transform: true}));


  //Swagger Setup

  const config = new DocumentBuilder()
      .setTitle('Game')
      .setDescription('The Game API description')
      .setVersion('1.0')
      .addTag('Game')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${SERVICE_NAME}/api`, app, document);


  await app.listen(Config.config.PORT);
}
bootstrap();
