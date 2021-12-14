import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Whitelist strips all properties not defined in entity
      whitelist: true,
      // forbidNonWhitelisted disables the request and returns error if properties not defined in entity are presant

      forbidNonWhitelisted: true,
      // makes body of request instance of entity class it expects, making it more type safe
      // and transforms query parameters to wanted type (from string to number)
      // it can slightly affect preformance
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
