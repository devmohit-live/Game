import { NestFactory } from '@nestjs/core';
import { AppModule } from './setup/app.module';
import {ValidationPipe} from "@nestjs/common";
import {SERVICE_NAME} from "./setup/config/constants";
import {Config} from "./setup/config";

async function bootstrap() {
  await Config.init();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: Config.config.corsAllowedOrigin,
    allowedHeaders: [ "content-type"],
  });
  app.enableShutdownHooks();
  app.setGlobalPrefix(SERVICE_NAME);
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(Config.config.PORT);
}
bootstrap();
