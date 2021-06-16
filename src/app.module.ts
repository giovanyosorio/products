import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://go:e3b3b8454@cluster0.3waul.mongodb.net/productos?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      },
    ),
  ],
})
export class AppModule {}
