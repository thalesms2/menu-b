import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 5000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://menu-f.vercel.app/',
      'https://menu-f.vercel.app',
      'http://localhost:5173',
      'http://localhost:5173/',
    ],
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
  });
  const config = new DocumentBuilder()
    .setTitle('Main Dish')
    .setDescription('Main Dish API')
    .setVersion('0.1')
    .addSecurity('apiKey', {
      type: 'apiKey',
      in: 'header',
      name: 'authorization',
      description: 'Key: authorization, value: apiKey',
    })
    .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  });

  await app.listen(PORT);
}
bootstrap();
