import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false});
  app.enableCors({ credentials: true, origin: true})

  const config = new DocumentBuilder()
    .setTitle('Gym application')
    .setDescription('Gym application API')
    .setVersion('1.0')
    .addTag('gym')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(7777);
}
bootstrap();
